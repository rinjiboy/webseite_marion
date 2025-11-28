import React from 'react';
import './App.css';
import Calendar from './calendar/calendar';
import Offers from './offers/offers';
import Prices from './price/price';
import Menu from './menu/menu';

import Titlepic from './media/IMG_0144.JPG';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Psychologische Beratung Marion Gunesch</h1>
        <p>Therapie für dein inneres Gleichgewicht</p>
        <Menu/>
      </header>

      {/* Main Section */}
      <main>
        <section id="welcome" className="section welcome">
          <h2>Willkommen</h2>
          <img className="titlepic" src={Titlepic} alt="Bild der Therapeutin"/>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </section>

  <Offers />

  <Prices />

  <Calendar />
       

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Marion Gunesch | Alle Rechte vorbehalten</p>
      </footer>
      </main>
    </div>    
    
  );
}

export default App;
