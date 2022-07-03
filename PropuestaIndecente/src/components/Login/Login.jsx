import {Style} from './Login.styles'; 
import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppContext } from '../../application/provider';
import { access } from '../../services/users';
const Login=()=>{
  const [state,setState] = useContext(AppContext);
  const [user,setUser]=useState({});
  const alta=async()=>{
    const id=await access(user);
    setState({user,id});
    console.log(state);
  } 
  return <Style>
    <h1>Bemvindo</h1> 
    <input type="text" onChange={e=>setUser(e.target.value)}/>
    <Link to="/plans/" onClick={()=>alta()}>Login</Link>
    <br />
  </Style>
};
export default Login;
