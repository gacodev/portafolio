import React from 'react';
import PropTypes from 'prop-types';

export const CalendarLink = ({ message }) => {
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#0272a3";
    e.target.style.transform = "scale(1.6)";
    e.target.style.border = "2px";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "darkblue";
    e.target.style.transform = "scale(1.2)";
  };

  return (
    <a
      href="https://calendar.app.google/PBmHSbh6zYZuVJgs6"
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "darkblue",
        color: "#FFFFFF",
        padding: "10px 20px",
        borderRadius: "5px",
        fontWeight: "bold",
        textDecoration: "none",
        transition: "background-color 0.3s ease",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src="/tecnologies/calendar.png"
        alt="Google Calendar"
        style={{ width: "24px", marginRight: "12px" }}
      />
      {message}
    </a>
  );
};

CalendarLink.propTypes = {
  message: PropTypes.string.isRequired,
};
