import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function SmartCalendar(props) {
  const listEventByDate =  props.listEventByDate;

  const [date, setDate] = useState(new Date());
  console.log(date)
  
  const handleClick = (e) => {
    listEventByDate(new Date(e))
  }
  return (
    <div className='app'>

      <p className='text-center'>
        <span className='bold'>Fecha elegida:</span>{' '}
        {date.toDateString()}
      </p>
      <div className='calendar-container'>
        <Calendar 
            onChange={setDate} 
            value={date} 
            onClickDay={handleClick}
            />
      </div>
      
    </div>
  );
}

export default SmartCalendar;
