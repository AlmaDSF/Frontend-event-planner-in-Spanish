import { useState } from 'react';
import Calendar from 'react-calendar';
// import "./style/calendar.css";
import 'react-calendar/dist/Calendar.css';


function SmartCalendar(props) {
  const listEventByDate =  props.listEventByDate;

  const [date, setDate] = useState(new Date());
  console.log(date)
  // console.log(date)

  return (
    <div className='app'>

      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      
      <div className='calendar-container'>
        <Calendar 
            onChange={setDate} 
            value={date} 
            onClick={() => listEventByDate({date})} 
            />
      </div>
      
    </div>
  );
}

export default SmartCalendar;

// inicial:

// {/* <li onClick={() => listEventByDate(event_date)}> {event_name} </li> */}


//14-17
{/* <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p> */}