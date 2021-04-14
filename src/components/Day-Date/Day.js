import React from 'react'

const Day = (props) => {
    let date = new Date(props.timezone)
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let day = days[date.getDay()];
    return (
        <div>
            {day}
        </div>
    )
}

export default Day;
