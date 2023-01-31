import { useState } from 'react';
import Calendar from 'react-calendar';
// import "./style/calendar.css";
import 'react-calendar/dist/Calendar.css';


function SmartCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>

      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      
    </div>
  );
}

export default SmartCalendar;