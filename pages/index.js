import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const t = {
    en: {
      title: "Concrete & Construction Experts",
      subtitle: "Serving Middletown, NY and 60 miles around (NY, NJ, PA)",
      services: "Our Services",
      contact: "Contact Us",
      insurance: "Fully insured. Reliable. Experienced.",
      description:
        "We specialize in stamped concrete, patios, flooring, foundations, pools, and more.",
      phone: "Call us",
      email: "Email us",
      social: "Follow us",
    },
    es: {
      title: "Expertos en Concreto y Construcción",
      subtitle: "Servicio en Middletown, NY y 60 millas a la redonda (NY, NJ, PA)",
      services: "Nuestros Servicios",
      contact: "Contáctanos",
      insurance: "Totalmente asegurado. Confiable. Con experiencia.",
      description:
        "Nos especializamos en concreto estampado, patios, pisos, cimentaciones, piscinas y más.",
      phone: "Llámanos",
      email: "Envíanos un correo",
      social: "Síguenos",
    },
  };

  const serviceImages = [
    "https://images.unsplash.com/photo-1588854337221-d71b0166ec79",
    "https://images.unsplash.com/photo-1600369672446-4d3f78b28de1",
    "https://images.unsplash.com/photo-1597097092972-5cba6f823d83",
    "https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd48",
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        {t[language].title}
        <button
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          style={{ marginLeft: "1rem", padding: "0.25rem 0.5rem" }}
        >
          🌐 {language === "en" ? "Español" : "English"}
        </button>
      </h1>
      <p>{t[language].subtitle}</p>
      <p>{t[language].description}</p>

      <h2 style={{ marginTop: "2rem" }}>{t[language].services}</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {serviceImages.map((src, i) => (
          <div key={i} style={{ width: "240px" }}>
            <img src={src} alt={`Service ${i}`} style={{ width: "100%" }} />
            <p style={{ textAlign: "center" }}>
              {["Stamped Concrete", "Patios", "Pools", "Foundations"][i]}
            </p>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: "2rem" }}>{t[language].contact}</h3>
      <p>{t[language].phone}: <strong>(555) 123-4567</strong></p>
      <p>{t[language].email}: <strong>info@yourcompany.com</strong></p>
      <p>👷 Owner: <strong>Agustin Jacinto</strong></p>

      <p style={{ marginTop: "2rem", fontSize: "0.8rem", color: "gray" }}>
        {t[language].insurance}
      </p>
    </div>
  );
}
