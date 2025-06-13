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
        "We specialize in stamped concrete, patios, flooring, foundations, pools, sidewalks, retaining walls, and more.",
      phone: "Call us",
      email: "Email us",
      social: "Follow us",
      gallery: "Project Gallery",
      map: "Service Area"
    },
    es: {
      title: "Expertos en Concreto y Construcción",
      subtitle: "Servicio en Middletown, NY y 60 millas a la redonda (NY, NJ, PA)",
      services: "Nuestros Servicios",
      contact: "Contáctanos",
      insurance: "Totalmente asegurado. Confiable. Con experiencia.",
      description:
        "Nos especializamos en concreto estampado, patios, pisos, cimentaciones, piscinas, aceras, muros de contención y más.",
      phone: "Llámanos",
      email: "Envíanos un correo",
      social: "Síguenos",
      gallery: "Galería de Proyectos",
      map: "Zona de Servicio"
    }
  };

  const serviceImages = [
    "/service1.jpg",
    "/service2.jpg",
    "/service3.jpg",
    "/service4.jpg"
  ];

  const serviceTitles = ["Stamped Concrete", "Patios", "Pools", "Foundations"];

  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg"
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      <header style={{ padding: "1rem 2rem", background: "#222", color: "white" }}>
        <h1>{t[language].title}</h1>
        <nav style={{ marginTop: "1rem" }}>
          <a href="#services" style={{ color: "white", marginRight: "1rem" }}>{t[language].services}</a>
          <a href="#gallery" style={{ color: "white", marginRight: "1rem" }}>{t[language].gallery}</a>
          <a href="#map" style={{ color: "white", marginRight: "1rem" }}>{t[language].map}</a>
          <a href="#contact" style={{ color: "white" }}>{t[language].contact}</a>
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            style={{ float: "right", background: "#444", color: "white", padding: "0.25rem 0.5rem", border: "none" }}
          >🌐 {language === "en" ? "Español" : "English"}</button>
        </nav>
      </header>

      <main style={{ padding: "2rem" }}>
        <p>{t[language].subtitle}</p>
        <p>{t[language].description}</p>

        <h2 id="services" style={{ marginTop: "2rem" }}>{t[language].services}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
          {serviceImages.map((src, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <img src={src} alt={`Service ${i}`} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
              <p style={{ fontWeight: "bold", marginTop: "0.5rem" }}>{serviceTitles[i]}</p>
            </div>
          ))}
        </div>

        <h2 id="gallery" style={{ marginTop: "3rem" }}>{t[language].gallery}</h2>
        <p style={{ marginBottom: "1rem" }}>More projects and before/after transformations available upon request.</p>
        <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "1rem" }}>
          {galleryImages.map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i}`} style={{ height: "180px", borderRadius: "6px" }} />
          ))}
        </div>

        <h2 id="map" style={{ marginTop: "3rem" }}>{t[language].map}</h2>
        <iframe
          title="Middletown Service Area"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294700.0482733665!2d-74.6893274747154!3d41.45240740859959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd38c305ad4b6f%3A0x7c40ec275db2f8f9!2sMiddletown%2C%20NY!5e0!3m2!1sen!2sus!4v1718300000000!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <h2 id="contact" style={{ marginTop: "3rem" }}>{t[language].contact}</h2>
        <p>{t[language].phone}: <strong>(555) 123-4567</strong></p>
        <p>{t[language].email}: <strong>info@yourcompany.com</strong></p>
        <p>👷 Owner: <strong>Agustin Jacinto</strong></p>
      </main>

      <footer style={{ background: "#f5f5f5", padding: "1rem 2rem", fontSize: "0.9rem", color: "#555" }}>
        {t[language].insurance}
      </footer>
    </div>
  );
}
