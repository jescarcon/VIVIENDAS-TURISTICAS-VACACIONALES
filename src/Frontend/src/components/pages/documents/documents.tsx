import React, { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default function Documents() {
  const [file, setFile] = useState<File | null>(null);
  const [jsonData, setJsonData] = useState<any | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${BASE_API_URL}/documents/upload`, formData);
      setJsonData(res.data); // JSON parcial desde OCR
    } catch (err) {
      console.error(err);
      alert("Error al procesar OCR");
    }
  };

  // Actualiza cualquier campo del JSON recursivamente
  const handleChange = (path: string, value: any) => {
    const keys = path.split(".");
    setJsonData((prev: any) => {
      const copy = { ...prev };
      let obj = copy;
      for (let i = 0; i < keys.length - 1; i++) {
        obj[keys[i]] = { ...obj[keys[i]] };
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return copy;
    });
  };

  // Renderiza recursivamente todos los campos de un objeto
  const renderForm = (obj: any, path: string = "") => {
    return Object.keys(obj).map((key) => {
      const value = obj[key];
      const currentPath = path ? `${path}.${key}` : key;

      if (value !== null && typeof value === "object" && !Array.isArray(value)) {
        return (
          <fieldset key={currentPath} style={{ paddingLeft: "1rem", borderLeft: "2px solid #ccc", marginBottom: "1rem" }}>
            <legend>{key}</legend>
            {renderForm(value, currentPath)}
          </fieldset>
        );
      } else {
        let inputType = "text";
        if (typeof value === "number") inputType = "number";
        if (typeof value === "boolean") inputType = "checkbox";

        return (
          <div key={currentPath} style={{ marginBottom: "0.5rem" }}>
            <label style={{ marginRight: "0.5rem" }}>{key}:</label>
            {inputType === "checkbox" ? (
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => handleChange(currentPath, e.target.checked)}
              />
            ) : (
              <input
                type={inputType}
                value={value ?? ""}
                onChange={(e) => handleChange(currentPath, inputType === "number" ? Number(e.target.value) : e.target.value)}
              />
            )}
          </div>
        );
      }
    });
  };

  const handleExportXml = async () => {
    if (!jsonData) return;
    try {
      const res = await axios.post(`${BASE_API_URL}/documents/export-xml`, jsonData, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "document.xml");
      document.body.appendChild(link);
      link.click();
      link.remove();
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

      {jsonData?.solicitud && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Formulario editable de JSON</h3>
          
          {renderForm(jsonData.solicitud, "solicitud")}

          <button onClick={handleExportXml} style={{ marginTop: "1rem" }}>
            Exportar a XML
          </button>
        </div>
      )}
    </div>
  );
}
