import "./App.css";
import axios from "axios";
import { useState } from "react";
import SmartCalendar from "./components/SmartCalendar";
import FormContactInfo from "./components/FormContactInfo";
import EventList from "./components/EventList";

const INITIAL_EVENTS = [
  {
    id: 1,
    title: "soccer",
    type: "sport",
    date: "Wed Feb 1 2023",
    location: "5th ave south, Seattle Wa",
  },
  {
    id: 5,
    title: "story book in the park",
    type: "family",
    date: "Wed Feb 1 2023",
    location: "1000 4th ave, Seattle Wa",
  },
  {
    id: 8,
    title: "farmers market",
    type: "free",
    date: "Wed Feb 1 2023",
    location: "5031 university way Ne, Seattle Wa",
  },
  {
    id: 10,
    title: "music",
    type: "concert",
    date: "Wed Feb 1 2023",
    location: "9219 35th ave ne, Seattle Wa",
  },
];

function App() {
  const [eventData, setEventData] = useState(INITIAL_EVENTS);

  // >>>>>>>>>>>>>>>>>>>>>EVENTS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  // get events from one type:
  // const getOneTypeDate =

  // const getOneTypeDate = (type) => {
  //   for (const event in eventList) {
  //     if (eventList[event].type === type) {
  //       setEventData(eventList[event].type);
  //     }
  //   }
  // };

  // >>>>>>>>>>>>>>>>>>>>>>>FORM<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  const [contactList, setContactList] = useState([]);
  const postman_url = "https://backend-event-planner-spanish.herokuapp.com/contact_info";

  // form -> send new contact info
  const addNewContactInfo = (newContactInfo) => {
    axios
      .post(`${postman_url}`, newContactInfo)
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

  //>>>>>extra <<<<

  //get cards from one board:
  // const [eventTypeList, setEventTypeList] = useState([]);
  const getEventList = () => {
    axios
      .get(`${postman_url}/event_types`)
      .then((response) => {
        console.log(response.data);
        const newEventTypeList = response.data;
        // setEventTypeList(newEventTypeList);
        return newEventTypeList;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getEventList()

  // The google api

  return (
    <div className="App">
      <h1 className="App-header"> "Calendario de eventos:" </h1>

      <FormContactInfo addContactCallbackFunc={addNewContactInfo} />

      <SmartCalendar />

      <p> Type of event: </p>
      <EventList eventList={eventData} getEventList={getEventList} />
    </div>
  );
}

export default App;
