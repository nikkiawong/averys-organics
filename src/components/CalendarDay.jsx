import React from 'react';
import PropTypes from 'prop-types';


function CalendarDay(props){
  return (
    <div>
      <h3>{props.day}</h3>
      <p><span>Location:</span> {props.location}</p>
    </div>
  );
}

CalendarDay.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default CalendarDay;
