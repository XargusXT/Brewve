import './SideNav.css'
export default function SideNav() {
  return (
    <nav className='sideNav' id='sideNav'>
        <span className='bubble'>Menú principal</span>
      <ul className='list'>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#menu">Menú</a></li>
        <li><a href="#gallery">Galería</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  )
}