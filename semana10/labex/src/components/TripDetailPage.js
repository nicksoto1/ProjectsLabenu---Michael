import React, { useState, useEffect } from "react";
import axios from "axios";
//Para o detalhe de uma viagem em específico
export function TripDetailPage()  {
  const [trip,setTrip] = useState({})

  useEffect(()  => {
    getTripDetail()
  },[ ])
  const getTripDetail = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/michael-soto-dumont/trip/3Ga6Stvj6B687TNgFK72",
        {
          headers: {
            auth: localStorage.getItem("token")
            }
          }
        )
.then((response)  => {
  setTrip(response.data.trip)
}).catch((error)  => {
  console.log(error)
})
}





return (
  <div>
    <p>Trip Detail</p>
    <p>{trip.name}</p>
  </div>
);
}


}