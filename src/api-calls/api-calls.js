import React from 'react';


const getRes = fetch("http://localhost:3001/api/v1/reservations")
  .then(response => {
    if (!response.ok) {
    throw new Error()
  } 
  return response.json()
  })
   
  .catch(error => alert("Error collecting reservations. Please try again later.")
  );

  export default getRes;