import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

import NavBar from './NavBar'

import { ActualPage, ListTrips, Trips, Line, Button, DecideButton } from './styles'

const AdmDetailsPage = () => {

    const { id } = useParams()

    const token = window.localStorage.getItem('token')

    const [tripName, setTripName] = useState()
    const [applications, setApplications] = useState([])


    const getTrips = () => {

const getItem = 
"https://us-central1-labenu-apis.cloudfunctions.net/labeX/michael-soto/trip/${id}"

        const axiosConfig = {
            headers: { auth: token }
        }
        axios
            .get(getItem, axiosConfig)
            .then(response => {
                setTripName(response.data.trip.name)
                setApplications(response.data.trip.candidates)
            })
            .catch(event=> {
                console.log(event)
            })
    }

    useEffect(() => {
        getTrips()
    }, [])

    const history = useHistory()
    const goBack = () => {
        history.push("/adm-trip")
    }

    //Aceitar Aplicação
    const aceptApplication = (applicationId) => {

      const putItem = 
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/michael-soto/trips/${id}/candidates/${applicationId}/decide/"

        const axiosConfig = {
            headers: { auth: token }
        }
        const body = {
            approve: true
        }
        axios
            .put(putItem, body, axiosConfig)
            .then(() => {
                alert("Candidato aprocado!")
            })
            .catch(event => {
                console.log(event)
            })
    }
    //Rejeitar Aplicação
    const rejectApplication = (applicationId) => {

      const putReject = 
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/michael-soto/trips/${id}/candidates/${applicationId}/decide/`

        const axiosConfig = {
            headers: { auth: token }
        }
        const body = {
            approve: false
        }
        axios
            .put(putReject, body, axiosConfig)
            .then(() => {
                alert("Candidato aprovado!")
            })
            .catch(event=> {
                console.log(event)
            })
    }
    return (
        <ListTrips>
            <NavBar />
            <ActualPage>candidaturas</ActualPage>
            <Trips>
                <h3>{tripName}</h3>
                <div>
                    {applications.length === 0 ? (<p>Sem candidatos.</p>)
                        :
                        (applications.map(application => {
                            return (
                                <div>
                                    <p>{application.name} - {application.age} - {application.country}</p>
                                    <p>{application.applicationText}</p>
                                    <DecideButton onClick={() => aceptApplication(application.id)}>aceitar</DecideButton>
                                    <DecideButton onClick={() => rejectApplication(application.id)}>rejeitar</DecideButton>
                                    <Line />
                                </div>
                            )
                        }
                        ))}
                </div>
                <Button onClick={goBack}>Voltar</Button>
            </Trips>
        </ListTrips>
    )
}
export default AdmDetailsPage