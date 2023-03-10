import "./style/App.css";
import axios from "axios";
import { useState, useEffect, React } from "react";
import SmartCalendar from "./components/SmartCalendar";
import FormContactInfo from "./components/FormContactInfo";
import EventList from "./components/EventList";
import MapSection from "./components/Map"; // import the map here

function App() {
  const url_event =
    "https://backend-event-planner-spanish.herokuapp.com/event_info";

  const [eventOneDate, setEventOneDate] = useState([]);
  // get -> event by date:
  const listEventByDate = (date) => {
    var convertedDate =
      "" + date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    axios
      .get(`${url_event}?date_event=${convertedDate}`)
      .then((response) => {
        console.log(response.data);
        const newEventList = [];
        for (const event of response.data) {
          if (
            event.event_date.replace(/,/g, "").slice(0, 15) ===
            date.toGMTString().replace(/,/g, "").slice(0, 15)
          ) {
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
  const [eventLocation, setEventLocation] = useState({
    lat: 47.5996538,
    lng: -122.3279151,
  });

  const getOneDirection = (eventId) => {
    axios
      .get(`${url_event}/${eventId}`)
      .then((response) => {
        console.log(response.data);
        const newLocationData = {
          lat: response.data.event_latitude,
          lng: response.data.event_longitude,
        };
        setEventLocation(newLocationData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // >>>>>>>>>>>>>>>>>>>>>>>FORM<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  const [contactList, setContactList] = useState([]);
  const url_contact =
    "https://backend-event-planner-spanish.herokuapp.com/contact_info";

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
    <div className="App_background">
      <header className="title">
        <h1 className="App-header">Calendario de Eventos</h1>
      </header>
      <nav className="form">
        <section className="subscription-form">
          <FormContactInfo addContactCallbackFunc={addNewContactInfo} />
        </section>
      </nav>

      <aside>
        <SmartCalendar listEventByDate={listEventByDate} />
        <section className="event-list-holder">
          <EventList
            eventList={eventOneDate}
            getOneDirection={getOneDirection}
            listEventByDate={listEventByDate}
          />
        </section>
      </aside>
      <main>
        <MapSection
          className="App-map"
          location={eventLocation}
          zoomLevel={15}
        />
      </main>

      <h3 className="poderosas"> ?? 2023 Las Poderosas </h3>
    </div>
  );
}

export default App;
