import {useState} from 'react';
import {LoginContainer} from './Login.styles';
import {Link} from "react-router-dom";
import {getPenaByCondition} from '../../app/api';
const Login=props=>{
  const [name,setName]=useState(null);
  const [pass,setPass]=useState(null);
  const logear=async()=>{
    if(name!==null&&pass!==null&&name.length>0&&pass.length>0){
      const D=await getPenaByCondition(name);
      if(D.length!==0){
        if(D[0].contra===pass){
          console.log("ENTER")
        }
        else{console.log("La contraseña introducida no es correcta")}
      }
      else{alert("El nombre introducido no existe")}
    }
  };
  return <LoginContainer>
    <div>
      <h2>Login</h2>
      <input type="text" name="Id" id="Id" placeholder='Nombre' onChange={e=>setName(e.target.value)}/>
      <br />
      <input type="password" name="Pass" id="Pass" placeholder='Contraseña' onChange={e=>setPass(e.target.value)}/>
      <br />
      <Link to="inicio" ><input type="button" value="Entrar" onClick={logear}/></Link>
      <br />
      <Link to="create"><input type="button" value="Crear Grupo"/></Link>
      <br />
    </div>
  </LoginContainer>
};
export default Login;