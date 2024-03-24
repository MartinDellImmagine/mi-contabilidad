
import Swal from 'sweetalert2'

import { useState } from 'react';
import { login } from '../config/firebase';
import { useNavigate } from 'react-router-dom';



const Login = () => {


    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate()
      
        const handleSignIn = async (e) => {
            e.preventDefault()


            try {
                if (email.trim() === '' && password.trim() === ''){
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Rellene los campos solicitados!',
                      })

                }
                const credentialUser = await login({ email, password })
                
        
                console.log(credentialUser);
                console.log('logeado');
                navigate('/app')
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al iniciar sesion',
                  })
            }
        }
        


    return (
        <>
    
        <div className='container mt-5 d-flex justify-content-center align-items-center sm'>
 
                <form className='card'  style={{ width: '32rem', height: '30rem' }}>
                <div className="card-body">
                    <p className='text-center'>Email</p>
                    <input className='form-control p-1' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  
                   
                    <p className='text-center'>Contrasena</p>
                    <input className='form-control' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <p className='text-center' ><button className='btn btn-link' onClick={()=>navigate('/register')}>Registrate aca</button></p>
                    <hr />
                    <div className="d-grid gap-2">

                    <button className='btn btn-primary' onClick={handleSignIn}>Iniciar sesión</button>
                    </div>
                    </div>
                </form>
        </div>

        </>
    );
}

export default Login;
