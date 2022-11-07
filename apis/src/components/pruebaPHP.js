import {useState,useEffect} from 'react';
import axios from 'axios';
const Prueba=()=>{
    const [name,setName]=useState(null);
    const [count,setCount]=useState(false);
    useEffect(()=>{
        setD();
    },[count]);
    const setD=()=>{
        const date=new Date();
        if(name!==null)axios.post("http://localhost:80/php/crearFichero.php",{name:name,date:date});
    };
    return <>
        <input type="text" onChange={e=>setName(e.target.value)}/>
        <input type="button" value="Registrar" onClick={()=>setCount(!count)}/>
    </>
};
export default Prueba;