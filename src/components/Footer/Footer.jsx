import React from 'react';
import './Footer.css';

const Footer = () => {
return (
    <footer className="footer" id='contact'>
        <div className="footer-container">
        {/* Sección principal del footer */}
        <div className="footer-main">
          {/* Información de contacto */}
          <div className="footer-section">
            <h3 className="footer-title">Brewve Café</h3>
            <p className="footer-description">
              Experiencia parisina auténtica en cada taza de café
            </p>
            <div className="footer-contact">
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                123 Rue de Rivoli, París, Francia
              </p>
              <p className="contact-item">
                <span className="contact-icon">📞</span>
                +33 1 42 96 15 78
              </p>
              <p className="contact-item">
                <span className="contact-icon">✉️</span>
                hello@brewve-paris.com
            </p>
            </div>
        </div>

          {/* Navegación rápida */}
        <div className="footer-section">
            <h3 className="footer-subtitle">Explora</h3>
            <ul className="footer-links">
            <li><a href="#hero" className="footer-link">Inicio</a></li>
            <li><a href="#abouts" className="footer-link">Nosotros</a></li>
            <li><a href="#menu" className="footer-link">Menú</a></li>
            <li><a href="#gallery" className="footer-link">Galería</a></li>
            </ul>
          </div>

          {/* Boletín y redes sociales */}
          <div className="footer-section">
            
            
            <div className="footer-social">
              <a href="https://wa.me/33612345678" className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">💬</span>
                WhatsApp:+33 1 42 96 15 78
              </a>
              <a href="https://facebook.com/brewveparis" className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">📘</span>
                Facebook:Brewve Cafe
              </a>
              <a href="https://instagram.com/brewveparis" className="social-link" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">📷</span>
                Instagram:Brewve Cafe
              </a>
            </div>
          </div>
        </div>

        {/* Sección del desarrollador */}
        <div className="footer-developer">
          <div className="developer-info">
            <h4 className="developer-title">Desarrollado por</h4>
            <p className="developer-name">Francis Diaz</p>
            <div className="developer-contact">
              <a href="https://wa.me/1234567890" className="dev-contact-link" target="_blank" rel="noopener noreferrer">
                <span className="dev-icon">💬</span>
                WhatsApp Dev:+53 51366196
              </a>
              <a href="https://github.com/tuusuario" className="dev-contact-link" target="_blank" rel="noopener noreferrer">
                <span className="dev-icon">💻</span>
                GitHub:XarDevelop/Frontend Developer
              </a>
              <a href="mailto:tuemail@ejemplo.com" className="dev-contact-link">
                <span className="dev-icon">📧</span>
                Email Dev:francislopez@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior de copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Brewve Café París. Todos los derechos reservados.
            </p>
            <div className="legal-links">
              <a href="" className="legal-link">Política de Privacidad</a>
              <a href="" className="legal-link">Términos de Servicio</a>
              <a href="" className="legal-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;