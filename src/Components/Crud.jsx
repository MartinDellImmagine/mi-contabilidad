
import { useEffect, useState } from 'react'
import { useUserContext } from '../context/UserContext';
import { db } from "../config/firebase";
import { uid } from 'uid';
import { set, ref, onValue, remove, update, get } from 'firebase/database'



export default function Crud() {

    const { user } = useUserContext()
    const [total, setTotal] = useState(0) 
    const [movimientos, setMovimientos] = useState([])
    const [movimiento, setMovimiento] = useState({
      fecha: '20/01/01',
      monto: 0,
      ingEg: 1,
      descripcion: 'Breve Descripcion',
      uuid: '#'
  })
  let sumaSaldo = 0
 


        //agregar productos
    const handleSubmit = (e)=>{
        e.preventDefault()

        writeDatabase(movimiento)
        
        
    }

    const handleChange = (e) => {
        //Actualiza los datos cuando son cambiados
        setMovimiento({
            ...movimiento, [e.target.name]: e.target.value
        })
    }
       //escribir base de datos

       const writeDatabase = (movimiento)=>{
        const uuid = uid()
          set(ref(db,`users/${user.uid}/${uuid}` ),{
            fecha: movimiento.fecha,
            ingEg: parseInt(movimiento.ingEg),
            monto: movimiento.monto,
            descripcion: movimiento.descripcion,
            uuid: uuid
          },
          
)
      }

        //leer base de datos
      useEffect(()=>{
       
        movimientos.map((el)=>{
          el.ingEg >0 ? sumaSaldo += parseInt(el.monto)  :  sumaSaldo -= parseInt(el.monto) ;
          console.log(sumaSaldo);
        })
        setTotal(sumaSaldo)
      })

        useEffect(() => {
          // Realiza la consulta a Firebase
          onValue(ref(db,`/users/${user.uid}`), snapshot =>{
            setMovimientos([])
            const data = snapshot.val();
            if (data !== null) {
              const productos = Object.values(data);
              setMovimientos(productos);
            } else {
              setMovimientos([]);
            }
        })
        }, []);
      
    //borrar el producto

    const handleDelete = (movimiento)=>{
      remove(ref(db, `/users/${user.uid}/${movimiento.uuid}`))        
  }


   
  return (
    <div>
        <div className="container mt-5">
      <div className="contianer">
        <form className="">
          <div className="row">
            <h2>Agregar un movimiento</h2>
            <div className="col-2">
              <div className="mb-3">
                <input
                  className="form-control"
                  type="input"
                  placeholder={movimiento.monto}
                  name="monto"
                  value={movimientos.monto}
                  onChange={handleChange}
                />
              </div>
              </div>
              <div className="col-2">
              <div className="mb-3">
                <input
                  className="form-control"
                 
                  type="date"
                  name="fecha"
                  value={movimientos.fecha}
                  onChange={handleChange}
                />
              </div>
              </div>

            <div className="col-2 mb-3">
            <select className='form-control' name="ingEg" value={movimiento.ingEg} onChange={handleChange}>
                <option value="1">Credito</option>
                <option value="0">Debito</option>
            </select>
            </div>
            <div className="col-4 mb-3">
            <div className="mb-3">
              <input
                className="form-control"
                type="input"
                placeholder={movimiento.descripcion}
                name="descripcion"
                value={movimientos.descripcion}
                onChange={handleChange}
              />
            </div>
            <div className='col-2'>
            <button className="btn btn-outline-success" onClick={handleSubmit}>
              Agregar
            </button>
            </div>
            </div>
    
          </div>
     
            <hr />

            <table className="table table-dark table-hover" >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Monto</th>
            <th scope='col'>Fecha</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
          {movimientos.map((e, index) => (
            <tr key={e.uuid} className={e.ingEg == 1 ? 'table-success' :'table-danger'}>
              <td scope="row">{index + 1}</td>
              <th>{e.descripcion}</th>
              <th>{e.monto}</th>
              <th>{e.fecha} {e.hora}</th>
              <th></th>
              <th></th>
              <th>
              <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(e)}
                >
                  Eliminar
                </button>
              </th>
            </tr>
          ))}
          <tr scope="row">
            <th></th>
              <th>Saldo Total</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>${total}</th>
          </tr>
        </tbody>
      </table>
          
      </form>
      </div>
     
    </div>
    </div>
  )
}
