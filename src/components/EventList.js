import Event from "./Event";
import PropTypes from "prop-types";

const EventList =  ({eventList, getEventList, getOneTypeDate, eventId}) => {
    const listComponents = eventList.map((event) => {
        return (
            <div
                // className={event.id === eventId ? "selectedEvent" : "None"}
                key={event.id}
                >
                <Event
                    id={event.id}
                    title={event.title}
                    type={event.type}
                    date={event.date}
                    location={event.location}
                    getEventList={getEventList}
                />
            </div>
        );
    })
    return (
        // <select >
        //     {listComponents}    
        // </select> )

        <div>{listComponents}</div>)
};

EventList.proTypes = {
    eventList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
        })),
    getEventList: PropTypes.func.isRequired,
    // getOneTypeDate: PropTypes.func.isRequired,
};

export default EventList;