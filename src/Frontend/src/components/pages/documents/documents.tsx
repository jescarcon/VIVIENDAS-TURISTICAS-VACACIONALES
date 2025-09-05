import React, { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default function Documents() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<any | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${BASE_API_URL}/documents/upload`, formData);
      setData(res.data); 
    } catch (err) {
      console.error(err);
      alert("Error al procesar OCR");
    }
  };

  const handleExportXml = async () => {
    if (!data) return;
    try {
      const res = await axios.post(
        `${BASE_API_URL}/documents/export-xml`,
        data,
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "document.xml");
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    } catch (err) {
      console.error(err);
      alert("Error al generar XML");
    }
  };

  return (
    <div>
      <h2>Escanear documento</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload}>Procesar OCR</button>

      {data && (
        <div>
          <h3>Datos detectados:</h3>
          <textarea
            value={JSON.stringify(data, null, 2)}
            onChange={(e) => setData(JSON.parse(e.target.value))}
            rows={15}
            style={{ width: "100%" }}
          />
          <button onClick={handleExportXml}>Exportar a XML</button>
        </div>
      )}
    </div>
  );
}
