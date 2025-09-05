// src/documents/documents.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/documents-service/prisma/prisma.service';
import * as Tesseract from 'tesseract.js';

@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.document.findMany();
  }

  async extractTextFromBuffer(fileBuffer: Buffer) {
    // 1 OCR
    const result = await Tesseract.recognize(fileBuffer, 'spa+eng');
    const rawText = result.data.text;

    // 2 Parseador integrado (por ahora no parsea, solo devuelve campos vacíos)
    const parsed = this.parseOcrToJson(rawText);

    // 3 Retornamos JSON con _raw y campos de la plantilla vacía
    return parsed;
  }

  parseOcrToJson(rawText: string) {
    // 🔹 Extraer nombre y apellidos
    const nombreMatch = rawText.match(/Estancia en curso.*\n([A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/);
    const nombreCompleto = nombreMatch ? nombreMatch[1].trim() : '';
    const [nombre, apellido1, apellido2] = nombreCompleto.split(' ');

    // 🔹 Extraer teléfono
    const telefonoMatch = rawText.match(/\+34\s\d{3}\s\d{2}\s\d{2}\s\d{2}/);
    const telefono = telefonoMatch ? telefonoMatch[0] : '';

    // 🔹 Extraer fechas (entrada-salida)
    const fechasMatch = rawText.match(/(\d{1,2})-(\d{1,2})\s(\w{3})/i);
    const meses: Record<string, string> = {
      ene: '01', feb: '02', mar: '03', abr: '04', may: '05', jun: '06',
      jul: '07', ago: '08', sep: '09', oct: '10', nov: '11', dic: '12'
    };
    const year = new Date().getFullYear();

    let fechaEntrada = '';
    let fechaSalida = '';
    if (fechasMatch) {
      const diaEntrada = fechasMatch[1].padStart(2, '0');
      const diaSalida = fechasMatch[2].padStart(2, '0');
      const mes = meses[fechasMatch[3].toLowerCase()] || '01';
      fechaEntrada = `${year}-${mes}-${diaEntrada}`;
      fechaSalida = `${year}-${mes}-${diaSalida}`;
    }

    // 🔹 Extraer número de viajeros
    const viajerosMatch = rawText.match(/(\d+)\sviajeros/i);
    const numPersonas = viajerosMatch ? parseInt(viajerosMatch[1], 10) : 1;

    return {
      solicitud: {
        codigoEstablecimiento: '',
        contrato: {
          referencia: '',
          fechaContrato: '',
          fechaEntrada,
          fechaSalida,
          numPersonas,
          numHabitaciones: 1,
          internet: false,
          pago: {
            tipoPago: 'EFECT',
            fechaPago: '',
            medioPago: '',
            titular: '',
            caducidadTarjeta: ''
          }
        },
        persona: {
          rol: 'VI',
          nombre: nombre || '',
          apellido1: apellido1 || '',
          apellido2: apellido2 || '',
          tipoDocumento: 'NIF',
          numeroDocumento: '',
          fechaNacimiento: '',
          nacionalidad: 'ESP',
          sexo: 'H',
          direccion: {
            direccion: '',
            direccionComplementaria: '',
            codigoMunicipio: '',
            nombreMunicipio: '',
            codigoPostal: '',
            pais: 'ESP'
          },
          telefono,
          correo: '',
          parentesco: 'PM'
        },
        _raw: rawText
      }
    };
  }


  // Generar XML completo desde objeto
  generateXml(solicitud: {
    codigoEstablecimiento: string;
    contrato: {
      referencia: string;
      fechaContrato: string;
      fechaEntrada: string;
      fechaSalida: string;
      numPersonas: number;
      numHabitaciones: number;
      internet: boolean;
      pago: {
        tipoPago: string;
        fechaPago: string;
        medioPago: string;
        titular: string;
        caducidadTarjeta?: string;
      };
    };
    persona: {
      rol: string;
      nombre: string;
      apellido1: string;
      apellido2?: string;
      tipoDocumento: string;
      numeroDocumento: string;
      soporteDocumento?: string;
      fechaNacimiento: string;
      nacionalidad: string;
      sexo: string;
      direccion: {
        direccion: string;
        direccionComplementaria: string;
        codigoMunicipio?: string;
        nombreMunicipio?: string;
        codigoPostal: string;
        pais: string;
      };
      telefono: string;
      telefono2?: string;
      correo: string;
      parentesco?: string;
    };
  }
  ): string {
    return `
<ns2:peticion xmlns:ns2="http://www.neg.hospedajes.mir.es/altaParteHospedaje">
  <solicitud>
    <codigoEstablecimiento>${solicitud?.codigoEstablecimiento || ''}</codigoEstablecimiento>
    <comunicacion>
      <contrato>
        <referencia>${solicitud?.contrato?.referencia || ''}</referencia>
        <fechaContrato>${solicitud?.contrato?.fechaContrato || ''}</fechaContrato>
        <fechaEntrada>${solicitud?.contrato?.fechaEntrada || ''}</fechaEntrada>
        <fechaSalida>${solicitud?.contrato?.fechaSalida || ''}</fechaSalida>
        <numPersonas>${solicitud?.contrato?.numPersonas ?? 1}</numPersonas>
        <numHabitaciones>${solicitud?.contrato?.numHabitaciones ?? 1}</numHabitaciones>
        <internet>${solicitud?.contrato?.internet ?? false}</internet>
        <pago>
          <tipoPago>${solicitud?.contrato?.pago?.tipoPago || ''}</tipoPago>
          <fechaPago>${solicitud?.contrato?.pago?.fechaPago || ''}</fechaPago>
          <medioPago>${solicitud?.contrato?.pago?.medioPago || ''}</medioPago>
          <titular>${solicitud?.contrato?.pago?.titular || ''}</titular>
          ${solicitud?.contrato?.pago?.caducidadTarjeta ? `<caducidadTarjeta>${solicitud.contrato.pago.caducidadTarjeta}</caducidadTarjeta>` : ''}
        </pago>
      </contrato>
      <persona>
        <rol>${solicitud?.persona?.rol || ''}</rol>
        <nombre>${solicitud?.persona?.nombre || ''}</nombre>
        <apellido1>${solicitud?.persona?.apellido1 || ''}</apellido1>
        ${solicitud?.persona?.apellido2 ? `<apellido2>${solicitud.persona.apellido2}</apellido2>` : ''}
        <tipoDocumento>${solicitud?.persona?.tipoDocumento || ''}</tipoDocumento>
        <numeroDocumento>${solicitud?.persona?.numeroDocumento || ''}</numeroDocumento>
        ${solicitud?.persona?.soporteDocumento ? `<soporteDocumento>${solicitud.persona.soporteDocumento}</soporteDocumento>` : ''}
        <fechaNacimiento>${solicitud?.persona?.fechaNacimiento || ''}</fechaNacimiento>
        <nacionalidad>${solicitud?.persona?.nacionalidad || ''}</nacionalidad>
        <sexo>${solicitud?.persona?.sexo || ''}</sexo>
        <direccion>
          <direccion>${solicitud?.persona?.direccion?.direccion || ''}</direccion>
          <direccionComplementaria>${solicitud?.persona?.direccion?.direccionComplementaria || ''}</direccionComplementaria>
          ${solicitud?.persona?.direccion?.codigoMunicipio ? `<codigoMunicipio>${solicitud.persona.direccion.codigoMunicipio}</codigoMunicipio>` : ''}
          ${solicitud?.persona?.direccion?.nombreMunicipio ? `<nombreMunicipio>${solicitud.persona.direccion.nombreMunicipio}</nombreMunicipio>` : ''}
          <codigoPostal>${solicitud?.persona?.direccion?.codigoPostal || ''}</codigoPostal>
          <pais>${solicitud?.persona?.direccion?.pais || ''}</pais>
        </direccion>
        <telefono>${solicitud?.persona?.telefono || ''}</telefono>
        ${solicitud?.persona?.telefono2 ? `<telefono2>${solicitud.persona.telefono2}</telefono2>` : ''}
        <correo>${solicitud?.persona?.correo || ''}</correo>
        ${solicitud?.persona?.parentesco ? `<parentesco>${solicitud.persona.parentesco}</parentesco>` : ''}
      </persona>
    </comunicacion>
  </solicitud>
</ns2:peticion>
  `.trim();
  }
}
