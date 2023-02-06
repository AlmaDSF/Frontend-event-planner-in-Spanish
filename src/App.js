import "./App.css";
import axios from "axios";
import { useState, React } from "react";
import SmartCalendar from "./components/SmartCalendar";
import FormContactInfo from "./components/FormContactInfo";
import EventList from "./components/EventList";
import MapSection from "./components/Map"; // import the map here

const location = {
  lat: 37.42216,
  lng: -122.08427,
};


function App() {
  const url_event = "https://backend-event-planner-spanish.herokuapp.com/event_info";

  const [eventOneDate, setEventOneDate] = useState([]);
  // get -> event by date:
  const listEventByDate = (date) => {
    var convertedDate = ""+ date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
    axios
      .get(`${url_event}?date_event=${convertedDate}`)
      .then((response) => {
        console.log(response.data)
        const newEventList = [];
        for (const event of response.data) {
          //TODO: The comparison might be error prone given the slice function
          if (event.event_date.replace(/,/g, "").slice(0,15)=== date.toGMTString().replace(/,/g, "").slice(0,15) ) {
            newEventList.push(event);
          }
        }
        setEventOneDate(newEventList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get direcctions:
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
  const [contactList, setContactList] = useState([]);
  const url_contact="https://backend-event-planner-spanish.herokuapp.com/contact_info";


  // form -> send new contact info:
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

        <h1> List of events: </h1>

        <EventList 
            eventList={eventOneDate} 
            // getEventList={getEventList}
            listEventByDate = {listEventByDate}
          />
          
        <MapSection className="App-map" location={location} zoomLevel={17} />;

    </div>
  );
}

export default App;
