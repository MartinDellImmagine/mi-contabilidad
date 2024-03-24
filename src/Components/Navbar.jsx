
import { logOut } from '../config/firebase'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'


export default function Navbar() {
    const { user } = useUserContext()
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
            <span className="navbar-brand mb-0 h1">{user.email}</span>
            <button className='btn btn-danger' onClick={handleLogout}>Cerrar sesion</button>
        </div>
    </nav>
  )
}
