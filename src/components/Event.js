import PropTypes from "prop-types";
import date from "./SmartCalendar";

function Event(props) {
    const event_id = props.event_id;
    const event_name =  props.event_name;
    const event_date =  props.event_date;
    const event_time_start =  props.event_time_start; 
    const event_time_end =  props.event_time_end;
    const event_link =  props.event_link;
    const event_latitude =  props.event_latitude; 
    const event_longitude =  props.event_longitude;
    const event_for_family =  props.event_for_family;
    const event_for_adults =   props.event_for_adults;
    const event_a_concert =  props.event_a_concert;
    const event_free =  props.event_free;
    const event_low_cost =  props.event_low_cost;
    const event_address =  props.event_address;
    const event_city =  props.event_city;
    const event_zipcode =  props.event_zipcode;
    const getEventList=  props.getEventList;
    const listEventByDate =  props.listEventByDate;


    return (
        
        <div>
            {/* <li onClick={() => listEventByDate(date)}> {date} </li> */}
            <ul>
                <h3> Event Name: {event_name} </h3>
                <li> Date: {event_date} </li>
                <li> Time Start: {event_time_start} </li>
                <li> Time End: {event_time_end} </li>
                <li> Link : {event_link} </li>
                <li> Event Type: </li>
                        <ul>
                            <li> Family: {event_for_family.toString} </li> 
                            <li> Adults: {event_for_adults} </li> 
                            <li> Concert: {event_a_concert} </li> 
                            <li> For free: {event_free} </li>
                            <li> Low cost: {event_low_cost} </li>
                        </ul>
                <li> Location: </li> 
                        <ul>
                            <li> Address: {event_address} </li>
                            <li> City: {event_city} </li>
                            <li> Zip Code: {event_zipcode} </li>
                        </ul>
            </ul>
    
        </div>
    )
}

Event.proTypes = {
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
    getEventList: PropTypes.func.isRequired,
    listEventByDate: PropTypes.func.isRequired,
};

export default Event;
