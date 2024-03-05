
import Swal from 'sweetalert2'

import { useState } from 'react';
import { login } from '../config/firebase';
import { useNavigate } from 'react-router-dom';



const Login = () => {


    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
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
    
        <div className='container mt-5'>
            <div className='contianer'>
                
           
                <div className='container'>
                        
                <form className='container'>
                <div>
                    <h2 className='text-center'>Iniciar sesión</h2>
                    <div>
                        <label>Email:</label>
                        <input className='form-control' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input className='form-control' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                   
                    <button className='btn btn-primary my-2' onClick={handleSignIn}>Iniciar sesión</button>
                    {error && <div>{error}</div>}
                    </div>
                </form>
                </div>
            </div>
        </div>

        </>
    );
}

export default Login;
