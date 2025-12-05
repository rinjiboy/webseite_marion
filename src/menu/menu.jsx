import { Component } from 'react';

class Menu extends Component {
    render(){
  // function triggerSubmenu() {
  //   $('#triggerSub').offClick().onClick('.submenu').show();
  // }
    return (
        <div className="menu">
          <ul>
            <li>
              <a href="#welcome">Willkommen</a>
            </li>
            <li>
              <a href="#offer" id="triggerSub">Therapieangebot</a>
            </li>
            <li>
              <a href="#price">Preise</a>
            </li>
            <li>
              <a href="#calendar">Termine</a>
            </li>
          </ul>
        </div>
    )
}
}

export default Menu;