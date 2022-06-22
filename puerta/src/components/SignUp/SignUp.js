import {Container,Modal} from './style';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {createItem} from '../../app/api';
export default ()=>{
    const [name,setName]=useState(null);
    const [user,setUser]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [repPassword,setRepPassword]=useState(null);
    const [style,setStyle]=useState({display:"none"});
    const fun=()=>{
        if(email.includes("@")&&password===repPassword){
            createItem({name,user,email,password});
            setStyle({display:"block"});
        }
        else alert("NOP");
    }
    return <Container>
        <Modal>
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
                <input type="text" placeholder='Username' onChange={e=>setUser(e.target.value)}/>
                <input type="email" placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
                <input type="password" placeholder='Repeat Password' onChange={e=>setRepPassword(e.target.value)}/>
                <input type="button" onClick={()=>{fun()}} value="Enviar" className='enviar'/>
            </form>
            <div style={style}>
                <p>Usuario creado correctamente</p><Link to="/">Volver al Inicio</Link>
            </div>
        </Modal>
    </Container>
}