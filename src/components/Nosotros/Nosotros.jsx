import React, { useState } from 'react';
import './Nosotros.css';

const Nosotros = () => {
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  const datosLugar = {
    nombre: "Nuestra Empresa",
    descripcion: "Somos una nueva cafeteria en Paris dedicada a ofrecer los mejores servicios gastronomicospara el disfrute del cliente con más de 10 años de experiencia en el sector. Nuestro compromiso es brindar calidad y excelencia en cada plato que realizamos con el objetivo de cumplir con sus expectativas.",
    direccion: "123 Rue de Rivoli, París, Francia",
    telefono: "+33 1 42 61 87 34",
    email: "hello@brewve-paris.com",
    horarios: "Lunes a Viernes: 8:00 - 17:00 | Sábados: 8:00 - 12:00"
  };

  const fotos = [
    {
      id: 1,
      url: "/src/components/Nosotros/assets/lugar.jpg",
      titulo: "Nuestras Instalaciones",
      descripcion: "Instalaciones modernas y cómodas"
    },
    {
      id: 2,
      url: "/src/components/Nosotros/assets/equipo.jpg",
      titulo: "Nuestro Equipo",
      descripcion: "Profesionales calificados y apasionados"
    },
    {
      id: 3,
      url: "/src/components/Nosotros/assets/proceso.jpg",
      titulo: "Proceso de Trabajo",
      descripcion: "Metodología eficiente y organizada"
    },
    {
      id: 4,
      url: "/src/components/Nosotros/assets/resultado.jpg",
      titulo: "Resultados",
      descripcion: "Calidad y excelencia garantizadas"
    }
  ];

  const abrirModal = (foto) => {
    setFotoSeleccionada(foto);
  };

  const cerrarModal = () => {
    setFotoSeleccionada(null);
  };

  return (
    <section className="nosotros-section">
      <div className="container" id='about'>
        <h2 className="titulo-principal">Conoce Más Sobre Nosotros</h2>
        
        {/* Información del lugar */}
        <div className="info-grid">
          <div className="info-card">
            <h3>Nuestra Historia</h3>
            <p>{datosLugar.descripcion}</p>
          </div>
          
          <div className="info-card">
            <h3>Contacto</h3>
            <div className="contacto-item">
              <span className="icono">📍</span>
              <span>{datosLugar.direccion}</span>
            </div>
            <div className="contacto-item">
              <span className="icono">📞</span>
              <span>{datosLugar.telefono}</span>
            </div>
            <div className="contacto-item">
              <span className="icono">✉️</span>
              <span>{datosLugar.email}</span>
            </div>
            <div className="contacto-item">
              <span className="icono">🕒</span>
              <span>{datosLugar.horarios}</span>
            </div>
          </div>
        </div>

        {/* Ubicación con mapa */}
        <div className="ubicacion-container">
          <h3>¿Dónde Encontrarnos?</h3>
          <div className="mapa-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615674397!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e67%3A0x24ddacbc85f568!2sTorre%20Eiffel!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la empresa"
            />
          </div>
        </div>

        {/* Galería de fotos */}
        <div className="galeria-container">
          <h3>Nuestra Galería</h3>
          <div className="galeria-grid">
            {fotos.map((foto) => (
              <div 
                key={foto.id} 
                className="galeria-item"
                onClick={() => abrirModal(foto)}
              >
                <img 
                  src={foto.url} 
                  alt={foto.titulo}
                  className="galeria-imagen"
                />
                <div className="galeria-overlay">
                  <h4>{foto.titulo}</h4>
                  <p>{foto.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal para imagen ampliada */}
        {fotoSeleccionada && (
          <div className="modal" onClick={cerrarModal}>
            <div className="modal-content">
              <span className="cerrar">&times;</span>
              <img 
                src={fotoSeleccionada.url} 
                alt={fotoSeleccionada.titulo}
                className="modal-imagen"
              />
              <div className="modal-info">
                <h4>{fotoSeleccionada.titulo}</h4>
                <p>{fotoSeleccionada.descripcion}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Nosotros;