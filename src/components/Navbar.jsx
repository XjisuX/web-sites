import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <ul className='menu'>
          <li>
            <Link className='menu-link' to='/'>
              Listado
            </Link>
          </li>
          <li>
            <Link className='menu-link' to='/site/new'>
              Crear Sitio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar