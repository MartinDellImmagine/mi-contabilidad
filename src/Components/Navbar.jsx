import React from 'react'
import { logOut } from '../config/firebase'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate()
    const handleLogout =  async (e)=> {
        e.preventDefault()
        try {
          logOut()
          navigate('/')
        } catch (error) {
          console.log(error);
        }}
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Navbar</span>
            <button className='btn btn-danger' onClick={handleLogout}>Cerrar sesion</button>
        </div>
    </nav>
  )
}
