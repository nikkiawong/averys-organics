import React from 'react';
import PropTypes from 'prop-types';


function CalendarDay(props){
  const calendarDayStyles = {
    padding: "2%",
    border: "1px solid black",
    width: "14%",
    lineHeight: "2",
    fontSize: "17px"
  }
  return (
    <div style={calendarDayStyles}>
      <h3>{props.day}</h3>
      <p><span>Location:</span> {props.location}</p>
      <p><span>Hours:</span> {props.hours}</p>
      <p><span>Booth:</span> {props.booth}</p>
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
