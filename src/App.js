import "./App.css";
import axios from "axios";
import { useState } from "react";
import SmartCalendar from "./components/SmartCalendar";
import FormContactInfo from "./components/FormContactInfo";
import EventList from "./components/EventList";


function App() {

  const [contactList, setContactList] = useState([]);
  const url_event = "https://backend-event-planner-spanish.herokuapp.com/event_info";
  const url_contact = "https://backend-event-planner-spanish.herokuapp.com/contact_info";

  const [eventOneDate, setEventOneDate] = useState([]);
  
  const listEventByDate = (date) => {
    axios
      .get(`${url_event}?"date_event"=${date}`)
      .then((response) => {
        console.log(response.data)
        const newEventList = [];
        for (const event of eventOneDate) {
          if (event.event_date === date ) {
            newEventList.push(event);
          }
        }
        setEventOneDate(newEventList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // >>>>>>>>>>>>>>>>>>>>>EVENTS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  // get events from one date:
  // const getOneTypeDate =

  // const getOneTypeDate = (type) => {
  //   for (const event in eventList) {
  //     if (eventList[event].type === type) {
  //       setEventData(eventList[event].type);
  //     }
  //   }
  // };
//>>>>>extra <<<<

  //get cards from one board:
  // const [eventTypeList, setEventTypeList] = useState([]);
  // const getEventList = () => {
  //   axios
  //     .get(`${url_event}/event_types`)
  //     .then((response) => {
  //       console.log(response.data);
  //       const newEventTypeList = response.data;
  //       // setEventTypeList(newEventTypeList);
  //       return newEventTypeList;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // getEventList()


  // >>>>>>>>>>>>>>>>>>>>>>>FORM<<<<<<<<<<<<<<<<<<<<<<<<<<<<


  // form -> send new contact info
  const addNewContactInfo = (newContactInfo) => {
    axios
      .post(`${url_contact}`, newContactInfo)
      .then((response) => {
        const newContactForm = [...contactList];
        const newContactJson = {
          ...newContactInfo,
          id: response.data.id,
        };
        newContactForm.push(newContactJson);
        setContactList(newContactForm);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="App">
        <h1 className="App-header"> "Calendario de eventos:" </h1>

        <FormContactInfo 
            addContactCallbackFunc={addNewContactInfo} />

        <SmartCalendar 
          listEventByDate={listEventByDate}
        />

        <p> List of events: </p>
        
        <EventList 
            eventList={eventOneDate} 
            // getEventList={getEventList}
            listEventByDate = {listEventByDate}
          />
    </div>
  );
}

export default App;
