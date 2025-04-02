import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // import the date picker styles

const CountdownTimer = () => {
  // Մենք ընտրում ենք միայն մեկնարկել և սահմանում ամսաթիվը.
  const defaultDate = new Date(null); // Անհրաժեշտ ամսաթիվը (ինչպես օրինակ 2025 Մարտ 24)

  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [countdown, setCountdown] = useState("");

  // Վերբեռնեք տվյալ ամսաթիվը ընտրելու
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = selectedDate - now; // Համեմատություն ներկայիս ժամանակի հետ

      if (timeRemaining <= 0) {
        clearInterval(interval);
        setCountdown("Ժամանակը ավարտվեց!");
        return;
      }

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown(
        `${days} օր ${hours} ժամ ${minutes} րոպե ${seconds} վայրկյան`
      );
    }, 1000);

    return () => clearInterval(interval); // Անջատում ենք ինտերվալը, երբ կոմպոնենտը հեռացվում է
  }, [selectedDate]);

  return (
    <div className="countdown-timer">
      {/* Պահանջվում է թաքցնել DatePicker-ը */}
      <div className="date-picker-container" style={{ display: "none" }}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          disabled
        />
      </div>

      <div className="countdown-display">
        <h3>Հարսանիքին մնացել է</h3>
        <p>{countdown}</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
