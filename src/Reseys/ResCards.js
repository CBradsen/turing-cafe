import React from "react";
import './ResCards.css'

const ResCards = ( {reservations} ) => {
return (
  <div className="reservation-card">
 {reservations.map((reservation) => (
  <div key={reservation.id}>
    <h3>{reservation.name}</h3>
    <h4>{reservation.date}</h4>
    <h4>{reservation.time} pm</h4>
    <h4>Number of guests: {reservation.number}</h4>
    <button>Cancel</button>
  </div>
 ))}
  </div>
);
}


export default ResCards;
