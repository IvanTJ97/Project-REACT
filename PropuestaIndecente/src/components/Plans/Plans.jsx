import {Test} from './Plans.styles';
import {Link} from 'react-router-dom';
import {useState,useEffect,useContext} from 'react';
import {AppContext} from '../../application/provider';
import {getItems} from '../../services/plans';
const Plans=()=>{
  const [state, setState]=useContext(AppContext);
  const [plans,setPlans]=useState([]);
  useEffect(()=>{getItems()
    .then(res=>setPlans(res))}
  ,[]);
  if(state.user===undefined)return <h1>LOADING...</h1>
  return <Test>
    <p>Bemvindo {state.user}</p>
    <h4>Planes:</h4>
    <ul>
      {plans.map((obj,key)=>
        <li key={key}><Link to={`/plans/${obj.name}`} onClick={()=>setState({...state,idPlan:obj.id})}>{obj.name} Propuesta de:</Link></li>)
      }
    </ul>
    <Link to="/plans/create/">+</Link>
    <br />
    <Link to="/" onClick={()=>setState({})}>LogOut</Link>
  </Test>
};

export default Plans;