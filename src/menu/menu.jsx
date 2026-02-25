 import { useState } from 'react';

const Menu = () => {
      const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="menu">
          <ul>
            <li>
              <a href="#welcome">Willkommen</a>
            </li>
            <li id="#offer" 
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}>
              <button className="link" >Therapieangebot & Preise {isOpen ? '▲' : '▼'} </button>

              {isOpen && (
                <ul className="submenu">
                  <li className="submenuItem">
                      <a href="#talk">Gesprächstherapie</a>
                  </li>
                  <li className="submenuItem">
                      <a href="#behaviour">Kognitive Verhaltenstherapie</a>
                  </li>
                  <li className="submenuItem">
                      <a href="#stress">Stressbewältigung</a>
                  </li>
                  <li className="submenuItem">
                      <a href="#anxiety">Angstbewältigung</a>
                  </li>
                </ul>
                )}
            </li>
            <li>
              <a href="#calendar">Termin vereinbaren</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </nav>
    )

    }

export default Menu;