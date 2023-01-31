import PropTypes from "prop-types";


const Event = ({id, title, type, date, location, getOneTypeDate, getEventList}) => {
    return (
        <div>
            {/* <li onClick={() => getOneTypeDate(type)}> {type} </li> */}
            <li>
                {getEventList()}
                {title}
            </li>
        </div>
    )
}

Event.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default Event;
