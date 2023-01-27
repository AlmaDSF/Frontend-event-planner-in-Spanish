
import './App.css';
import axios from "axios";
import { useState } from "react";
import SmartCalendar from './components/SmartCalendar';
import FormContactInfo from './components/FormContactInfo';


function App() {

  const [contactList, setContactList] = useState([]);
  const postman_url = "http://127.0.0.1:5000/contact_info";

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



  return (
    <div className="App">
      <h1 className="App-header"> "Calendario de eventos:" </h1>
        
        <FormContactInfo addContactCallbackFunc={addNewContactInfo} />

        <SmartCalendar />

        
        
    </div>
  );
}

export default App;
