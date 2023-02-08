import Event from "./Event";
import PropTypes from "prop-types";

const EventList =  ({listEventByDate, eventList, getEventList, getOneDirection}) => {
    const listComponents = eventList.map((event) => {
        return (
            <div
                key={event.event_id}
                >
                <Event
                    eventId = {event.event_id}
                    eventName = {event.event_name}
                    eventDate = {event.event_date}
                    eventTimeStart = {event.event_time_start} 
                    eventTimeEnd = {event.event_time_end}
                    eventLink = {event.event_link}
                    eventLatitude = {event.event_latitude} 
                    eventLongitude = {event.event_longitude}
                    eventForFamily = {event.event_for_family}
                    eventForAdults =  {event.event_for_adults}
                    eventAConcert = {event.event_a_concert}
                    eventFree = {event.event_free}
                    eventLowCost = {event.event_low_cost}
                    eventAddress = {event.event_address}
                    eventCity = {event.event_city}
                    eventZipCode = {event.event_zipcode}
                    getEventList={getEventList}
                    listEventByDate = {listEventByDate}
                    getOneDirection = {getOneDirection}
                />
            </div>
        );
    })
    return (
        <div>{listComponents}</div>)
};

EventList.proTypes = {
    eventList: PropTypes.arrayOf(
        PropTypes.shape({
            eventId : PropTypes.number,
            eventName : PropTypes.string.isRequired,
            eventDate : PropTypes.any.isRequired,
            eventTimeStart : PropTypes.any.isRequired,
            eventTimeEnd : PropTypes.any,
            eventLink : PropTypes.string.isRequired,
            eventLatitude : PropTypes.number,
            eventLongitude : PropTypes.number,
            eventForFamily : PropTypes.bool,
            eventForAdults :  PropTypes.bool,
            eventAConcert : PropTypes.bool,
            eventFree : PropTypes.bool,
            eventLowCost : PropTypes.bool,
            eventAddress : PropTypes.string,
            eventCity : PropTypes.string,
            eventZipCode : PropTypes.number,
        })),
    getEventList: PropTypes.func.isRequired,
    listEventByDate: PropTypes.func.isRequired,
    getOneDirection : PropTypes.func.isRequired,
};

export default EventList;