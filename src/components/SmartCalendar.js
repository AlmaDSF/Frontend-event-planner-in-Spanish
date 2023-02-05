import { useState } from 'react';
import Calendar from 'react-calendar';
// import "./style/calendar.css";
import 'react-calendar/dist/Calendar.css';


function SmartCalendar(props) {
  const listEventByDate =  props.listEventByDate;

  const [date, setDate] = useState(new Date());
  console.log(date)
  // console.log(date)
  const handleClick = (e) => {
    listEventByDate(new Date(e))
  }
  return (
    <div className='app'>

      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      <button onClick={handleClick} >Hazme Click</button>
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
