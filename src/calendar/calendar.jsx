import { Component } from 'react';

class Calendar extends Component {
    render(){
return(
    <section id="calendar" className="section calendar">
    <h2>Termin vereinbaren</h2>
    <div className="calendar-container">
    <iframe id="calendar" title="bookings" src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3jtDdmruEhcucsADPt8YxUIsp4GeaHvvkAfpqqUtsDHWpSZF1ux5EJsYlSqQnZlD0h6-1KXg08?gv=true"  style={{borderwidth:"0", width:"800" ,height:"600" ,frameborder:"0" ,scrolling:"no"}}></iframe>

    </div>
  </section>
)
}
}

export default Calendar;