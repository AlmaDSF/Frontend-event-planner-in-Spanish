import PropTypes from "prop-types";
import date from "./SmartCalendar";

function Event(props) {
  const eventId = props.eventId;
  const eventName = props.eventName;
  const eventDate = props.eventDate;
  const eventTimeStart = props.eventTimeStart;
  const eventTimeEnd = props.eventTimeEnd;
  const eventLink = props.eventLink;
  const eventLatitude = props.eventLatitude;
  const eventLongitude = props.eventLongitude;
  const eventForFamily = props.eventForFamily;
  const eventForAdults = props.eventForAdults;
  const eventAConcert = props.eventAConcert;
  const eventFree = props.eventFree;
  const eventLowCost = props.eventLowCost;
  const eventAddress = props.eventAddress;
  const eventCity = props.eventCity;
  const eventZipCode = props.eventZipCode;
  const getEventList = props.getEventList;
  const listEventByDate = props.listEventByDate;
  const getOneDirection = props.getOneDirection;

  const handleClick = (e) => {
    getOneDirection(eventId);
  };
  const date = eventDate.slice(0, 16);
  const startTime = eventTimeStart.slice(16, 22);
  const endTime = eventTimeEnd.slice(16, 22);

  const keywords = [
    eventForFamily,
    eventForAdults,
    eventAConcert,
    eventFree,
    eventLowCost,
  ];
  const displayTerms = [
    "Familiar",
    "Adultos",
    "Concierto",
    "Gratuito",
    "Económico",
  ];

  let output = "";

  for (let i = 0; i < keywords.length; i++) {
    if (keywords[i] === true) {
      console.log(keywords[i]);
      const term = displayTerms[i];
      output += term + ", ";
    }
  }


  return (
    <div className="event-list">
      <ul>
        <h2> Nombre del evento: {eventName} </h2>
        <li> Fecha del evento: {date}. </li>
        <li>
          {" "}
          Horario: {startTime} - {endTime}hrs.{" "}
        </li>
        <li > 
            <a href={eventLink} className="link-web-site">
            Página de internet: {eventLink}
            </a>     
            {/* <button className="button-link"> Oprima aqui </button> */}
            {/* </a>     */}
        </li>
        <li> Tipo de evento: </li>
        <ul>
          <li>{output}</li>
        </ul>
        <li> Ubicación: </li>
        <ul>
          <li> Dirección: {eventAddress}. </li>
          <li> Ciudad: {eventCity}. </li>
          <li> Código Postal: {eventZipCode} </li>
        </ul>
        <button className="button-link" onClick={handleClick}> Oprimir para la ubicación </button>
      </ul>
    </div>
  );
}

Event.proTypes = {
  eventId: PropTypes.number,
  eventName: PropTypes.string.isRequired,
  eventDate: PropTypes.any.isRequired,
  eventTimeStart: PropTypes.any.isRequired,
  eventTimeEnd: PropTypes.any,
  eventLink: PropTypes.string.isRequired,
  eventLatitude: PropTypes.number,
  eventLongitude: PropTypes.number,
  eventForFamily: PropTypes.bool,
  eventForAdults: PropTypes.bool,
  eventAConcert: PropTypes.bool,
  eventFree: PropTypes.bool,
  eventLowCost: PropTypes.bool,
  eventAddress: PropTypes.string,
  eventCity: PropTypes.string,
  eventZipCode: PropTypes.number,
  getEventList: PropTypes.func.isRequired,
  listEventByDate: PropTypes.func.isRequired,
  getOneDirection: PropTypes.func.isRequired,
};

export default Event;
