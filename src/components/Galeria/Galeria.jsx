import React from 'react';
import './Galeria.css';

const Galeria = () => {
  const fotos = [
    {
      id: 1,
      url: '/src/components/Galeria/assets/interior1.jpg',
      alt: 'Interior de Brewve con mesas de madera y ambiente cálido',
      categoria: 'interior'
    },
    {
      id: 2,
      url: '/src/components/Galeria/assets/personal1.jpg',
      alt: 'Barista preparando café en máquina de espresso',
      categoria: 'personal'
    },
    {
      id: 3,
      url: '/src/components/Galeria/assets/producto1.jpg',
      alt: 'Tarta y croissants en vitrina de Brewve',
      categoria: 'productos'
    },
    {
      id: 4,
      url: '/src/components/Galeria/assets/exterior1.jpg',
      alt: 'Terraza de Brewve en París con vista a la calle',
      categoria: 'exterior'
    },
    {
      id: 5,
      url: '/src/components/Galeria/assets/producto2.jpg',
      alt: 'Granos de café tostados en tazones de madera',
      categoria: 'productos'
    },
    {
      id: 6,
      url: '/src/components/Galeria/assets/personal2.jpg',
      alt: 'Equipo de Brewve sonriendo detrás del mostrador',
      categoria: 'personal'
    },
    {
      id: 7,
      url: '/src/components/Galeria/assets/clientes2.jpg',
      alt: 'Cliente disfrutando de su café en Brewve',
      categoria: 'clientes'
    },
    {
      id: 8,
      url: '/src/components/Galeria/assets/producto3.jpg',
      alt: 'Detalle del arte latte en cappuccino de Brewve',
      categoria: 'productos'
    }
  ];

  return (
    <section className="galeria">
      <div className="galeria-container">
        <div className="galeria-header">
          <h2 className="galeria-titulo" id='gallery'>Momentos Brewve</h2>
          <p className="galeria-frase">
            "Donde cada taza cuenta una historia y cada momento se convierte en recuerdo"
          </p>
        </div>
        
        <div className="galeria-grid">
          {fotos.map((foto) => (
            <div key={foto.id} className="galeria-item">
              <img 
                src={foto.url} 
                alt={foto.alt}
                className="galeria-imagen"
                loading="lazy"
              />
              <div className="galeria-overlay">
                <span className="galeria-categoria">{foto.categoria}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;