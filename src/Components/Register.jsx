import { useState } from "react";
import { register } from "../config/firebase";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Registrando');

        try {
            const credentialUser = await register({ email, password })
            Swal.fire({
                icon: 'success',
                text: 'Usuario registrado con exito',
              })
            console.log(credentialUser);
            navigate('/')
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Registro fallido',
                text: `${error}`
              })
        }
    }
    return (


        <>
            <div className="container">
                <h3 className="mt-5">Registrar un nuevo usuario</h3>

                <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input className="form-control" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <input className="form-control" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    </div>
                    <button className="btn btn-success mt-3" type="submit">Registrar</button>


                </form>
            </div>

        </>
    )
};

export default Register;
