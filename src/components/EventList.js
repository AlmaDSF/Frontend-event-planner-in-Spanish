import Event from "./Event";
import PropTypes from "prop-types";

const EventList =  ({listEventByDate, eventList, getEventList, getOneDirection}) => {
    const listComponents = eventList.map((event) => {
        return (
            <div
                // className={event.id === eventId ? "selectedEvent" : "None"}
                key={event.event_id}
                >
                <Event
                    event_id = {event.event_id}
                    event_name = {event.event_name}
                    event_date = {event.event_date}
                    event_time_start = {event.event_time_start} 
                    event_time_end = {event.event_time_end}
                    event_link = {event.event_link}
                    event_latitude = {event.event_latitude} 
                    event_longitude = {event.event_longitude}
                    event_for_family = {event.event_for_family}
                    event_for_adults =  {event.event_for_adults}
                    event_a_concert = {event.event_a_concert}
                    event_free = {event.event_free}
                    event_low_cost = {event.event_low_cost}
                    event_address = {event.event_address}
                    event_city = {event.event_city}
                    event_zipcode = {event.event_zipcode}
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
            event_id : PropTypes.number,
            event_name : PropTypes.string.isRequired,
            event_date : PropTypes.any.isRequired,
            event_time_start : PropTypes.any.isRequired,
            event_time_end : PropTypes.any,
            event_link : PropTypes.string,
            event_latitude : PropTypes.number,
            event_longitude : PropTypes.number,
            event_for_family : PropTypes.bool,
            event_for_adults :  PropTypes.bool,
            event_a_concert : PropTypes.bool,
            event_free : PropTypes.bool,
            event_low_cost : PropTypes.bool,
            event_address : PropTypes.string,
            event_city : PropTypes.string,
            event_zipcode : PropTypes.number,
        })),
    getEventList: PropTypes.func.isRequired,
    listEventByDate: PropTypes.func.isRequired,
    getOneDirection : PropTypes.func.isRequired,
};

export default EventList;