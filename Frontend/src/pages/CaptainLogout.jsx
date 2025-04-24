
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CaptainLogout = () => {
    const token = localStorage.getItem('Captain-token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_API_URL}/Captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('Captain-token')
            navigate('/Captain-login')
        }
    })

    return (
        <div>CaptainLogout</div>
    )
}

export default CaptainLogout