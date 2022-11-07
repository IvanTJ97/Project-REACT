import {useState} from 'react';
//import axios from 'axios';
import {createPena} from '../../app/api';
import {CreateContainer} from './FormG.styles';
const FormG=props=>{
  const [nameG,setNameG]=useState(null);
  const [nameM,setNameM]=useState(null);
  const [pass,setPass]=useState(null);
  const [passR,setPassR]=useState(null);
  const crear=()=>{
    /*if(nameG!==null&&nameM!==null&&pass!==null&&pass===passR)axios.post("http://localhost/php/penas/createUser.php",{id:nameG,name:nameM,pass})
    else{alert("NO")};*/
    if(nameG!==null&&nameG.length>0&&nameM!==null&&nameM.length>0&&pass!==null&&pass.length>0&&passR===pass)createPena({nombre:nameG.toLowerCase(),municipio:nameM.toLowerCase(),contra:pass});
    else alert("Error")
  };

  return <CreateContainer>
    <div>
      <h2>Crear Grupo</h2>
      <input type="text" name="NameG" id="NameG" placeholder='Nombre Grupo' onChange={e=>setNameG(e.target.value)}/>
      <br/>
      <input type="text" name="NameM" id="NameM" placeholder='Nombre Municipio' onChange={e=>setNameM(e.target.value)}/>
      <br />
      <input type="password" name="Pass" id="Pass" placeholder='Contraseña' onChange={e=>setPass(e.target.value)}/>
      <br/>
      <input type="password" name="RepPass" id="RepPass" placeholder='Repetir Contraseña' onChange={e=>setPassR(e.target.value)}/>
      <br/>
      <input type="button" value="Crear" onClick={crear}/>
    </div>
  </CreateContainer>
};
export default FormG;