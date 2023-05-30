import React from 'react';


const getRes = () => {
  return fetch("http://localhost:3001/api/v1/reservations")
  .then(response => {
    if (!response.ok) {
    throw new Error()
  } 
  console.log(response)
  return response.json()
  })
   
  .catch(error => alert("Error collecting reservations. Please try again later.")
  )
}

// function getRes() {
//   return fetch("http://localhost:3001/api/v1/reservations")
//   .then((response) => response.json())
// }

  export default getRes;