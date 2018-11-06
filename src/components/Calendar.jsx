import React from 'react';
import CalendarDay from './CalendarDay';

const marketSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function Calendar(){
  const calendarStyles = {
    display: "flex",
    justifyContent: "center",
    margin: "5% 3%",
    border: "1px solid black",
    textAlign: "center"
  }
  return (
    <div style={calendarStyles}>
      {marketSchedule.map((date, index) =>
        <CalendarDay day={date.day}
          location={date.location}
          hours={date.hours}
          key={index}
          booth={date.booth} />
      )}
    </div>
  );
}

export default Calendar;

// produceList = (props) => {
//   for (let i=0; i < props.selection.length; i++) {
//     return props.selection[i];
//   }
// }
