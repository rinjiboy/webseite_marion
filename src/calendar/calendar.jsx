import { Component } from 'react';

class Calendar extends Component {
    render(){
return(
    <section id="calendar" className="section calendar">
    <h2>Termin vereinbaren</h2>
    <div className="calendar-container">
      <iframe
        title="Google Kalender"
        src="https://calendar.google.com/calendar/embed?src=deutschland%40gmail.com&ctz=Europe%2FBerlin"
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  </section>
)
}
}

export default Calendar;