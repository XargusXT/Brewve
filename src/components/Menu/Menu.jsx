import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [seccionActiva, setSeccionActiva] = useState('bebidas');

  const menuData = {
    bebidas: [
      { nombre: "Café Americano", precio: "€3.50", imagen: "/src/components/Menu/assets/Bebidas/cafe_americano.jpg" },
      { nombre: "Café Latte", precio: "€4.20", imagen: "/src/components/Menu/assets/Bebidas/cafe_latte.jpg" },
      { nombre: "Cappuccino", precio: "€4.00", imagen: "/src/components/Menu/assets/Bebidas/cappuccino.jpg" },
      { nombre: "Espresso", precio: "€2.80", imagen: "/src/components/Menu/assets/Bebidas/Espresso.jpg" },
      { nombre: "Mocha", precio: "€4.50", imagen: "/src/components/Menu/assets/Bebidas/mocha.jpg" },
      { nombre: "Té Verde", precio: "€3.00", imagen: "/src/components/Menu/assets/Bebidas/te_verde.jpg" },
      { nombre: "Té Negro", precio: "€3.00", imagen: "/src/components/Menu/assets/Bebidas/te_negro.jpg" },
      { nombre: "Chocolate Caliente", precio: "€4.00", imagen: "/src/components/Menu/assets/Bebidas/Chocolate_Caliente.jpg" },
      { nombre: "Frapé de Café", precio: "€5.00", imagen: "/src/components/Menu/assets/Bebidas/Frapé_de_Café.jpg" },
      { nombre: "Jugo Natural", precio: "€4.50", imagen: "/src/components/Menu/assets/Bebidas/jugo_natural.jpg" },
      { nombre: "Limonada", precio: "€3.80", imagen: "/src/components/Menu/assets/Bebidas/limonada.jpg" },
      { nombre: "Agua Mineral", precio: "€2.50", imagen: "/src/components/Menu/assets/Bebidas/agua_mineral.jpg" }
    ],
    aperitivos: [
      { nombre: "Croissant", precio: "€2.50", imagen: "/src/components/Menu/assets/Aperitivos/Croissant.jpg" },
      { nombre: "Pain au Chocolat", precio: "€3.00", imagen: "/src/components/Menu/assets/Aperitivos/Pain_au_Chocolat.jpg" },
      { nombre: "Baguette con Mantequilla", precio: "€2.00", imagen: "/src/components/Menu/assets/Aperitivos/Baguette_con_Mantequilla.jpg" },
      { nombre: "Quiche Lorraine", precio: "€5.00", imagen: "/src/components/Menu/assets/Aperitivos/Quiche_Lorraine.jpg" },
      { nombre: "Tartine de Salmon", precio: "€6.50", imagen: "/src/components/Menu/assets/Aperitivos/Tartine_de_Salmon.jpg" },
      { nombre: "Foie Gras con Pan", precio: "€12.00", imagen: "/src/components/Menu/assets/Aperitivos/Foie_Gras_con_Pan.jpg" },
      { nombre: "Ensalada Caprese", precio: "€7.00", imagen: "/src/components/Menu/assets/Aperitivos/Ensalada_Caprese.jpg" },
      { nombre: "Sopa de Cebolla", precio: "€4.50", imagen: "/src/components/Menu/assets/Aperitivos/Sopa_de_Cebolla.jpg" },
      { nombre: "Croque Monsieur", precio: "€8.00", imagen: "/src/components/Menu/assets/Aperitivos/Croque_Monsieur.jpg" },
      { nombre: "Croque Madame", precio: "€8.50", imagen: "/src/components/Menu/assets/Aperitivos/Croque_Madame.jpg" },
      { nombre: "Tartine de Fromage", precio: "€4.00", imagen: "/src/components/Menu/assets/Aperitivos/Tartine_de_Fromage.jpg" },
      { nombre: "Bruschetta", precio: "€5.50", imagen: "/src/components/Menu/assets/Aperitivos/Bruschetta.jpg" }
    ],
    postres: [
      { nombre: "Tiramisú", precio: "€5.00", imagen: "/src/components/Menu/assets/Postres/tiramisu.jpg" },
      { nombre: "Crème Brûlée", precio: "€5.50", imagen: "/src/components/Menu/assets/Postres/Creme_Brulee.jpg" },
      { nombre: "Macarons", precio: "€2.00", imagen: "/src/components/Menu/assets/Postres/Macarons.jpg" },
      { nombre: "Éclair", precio: "€3.50", imagen: "/src/components/Menu/assets/Postres/Éclair.jpg" },
      { nombre: "Tarte Tatin", precio: "€4.50", imagen: "/src/components/Menu/assets/Postres/Tarte_Tatin.jpg" },
      { nombre: "Profiteroles", precio: "€6.00", imagen: "/src/components/Menu/assets/Postres/Profiteroles.jpg" },
      { nombre: "Mousse de Chocolate", precio: "€4.00", imagen: "/src/components/Menu/assets/Postres/Mousse_de_Chocolate.jpg" },
      { nombre: "Madeleines", precio: "€2.00", imagen: "/src/components/Menu/assets/Postres/Madeleines.jpg" },
      { nombre: "Tarte au Citron", precio: "€4.50", imagen: "/src/components/Menu/assets/Postres/Tarte_au_Citron.jpg" },
      { nombre: "Paris-Brest", precio: "€5.50", imagen: "/src/components/Menu/assets/Postres/Paris-Brest.jpg" },
      { nombre: "Île Flottante", precio: "€5.00", imagen: "/src/components/Menu/assets/Postres/Ile_Flottante.jpg" },
      { nombre: "Soufflé", precio: "€6.50", imagen: "/src/components/Menu/assets/Postres/Soufflé.jpg" }
    ]
  };

  const secciones = [
    { id: 'bebidas', nombre: 'Bebidas', icono: '☕' },
    { id: 'aperitivos', nombre: 'Aperitivos', icono: '🥐' },
    { id: 'postres', nombre: 'Postres', icono: '🍰' }
  ];

  return (
    <div className="menu-container" id='menu'>
      <h1 className="menu-title">Menú Brewve</h1>
      <p className="menu-subtitle">Cafetería en el corazón de París</p>
      
      {/* Navegación de secciones */}
      <div className="menu-navigation">
        {secciones.map((seccion) => (
          <button
            key={seccion.id}
            className={`nav-button ${seccionActiva === seccion.id ? 'active' : ''}`}
            onClick={() => setSeccionActiva(seccion.id)}
          >
            <span className="nav-icon">{seccion.icono}</span>
            <span className="nav-text">{seccion.nombre}</span>
          </button>
        ))}
      </div>

      {/* Renderizado condicional de la sección activa */}
      <div className="menu-content">
        <h2 className="section-title">
          {secciones.find(s => s.id === seccionActiva)?.icono} {secciones.find(s => s.id === seccionActiva)?.nombre}
        </h2>
        
        <div className="menu-grid">
          {menuData[seccionActiva].map((item, index) => (
            <div 
              key={index} 
              className="menu-item"
              style={{ backgroundImage: `url(${item.imagen})` }}
            >
              <div className="menu-item-overlay">
                <h3 className="item-name">{item.nombre}</h3>
                <p className="item-price">{item.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;