import { Component } from 'react';

class Submenu extends Component {
    render(){
        const {element} = this.props; 

        return(
            <div className="submenu">
              <ul>
                <li>
                    <a href="#talk">Gesprächstherapie</a>
                </li>
                <li>
                    <a href="#behaviour">Kognitive Verhaltenstherapie</a>
                </li>
                <li>
                    <a href="#stress">Stressbewältigung</a>
                </li>
                <li>
                    <a href="#anxiety">Angstbewältigung</a>
                </li>
              </ul>
            </div>
        )
    }
}

export default Submenu;

