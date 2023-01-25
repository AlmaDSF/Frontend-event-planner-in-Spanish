
import './App.css';
import SmartCalendar from './components/SmartCalendar';
import FormContactInfo from './components/FormContactInfo';


function App() {

  return (
    <div className="App">
      <h1 className="App-header"> "Calendario de eventos:" </h1>
        
        <FormContactInfo />

        <SmartCalendar />

        
        
    </div>
  );
}

export default App;
