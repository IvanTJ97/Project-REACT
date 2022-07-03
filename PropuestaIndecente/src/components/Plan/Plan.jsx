import { Test } from './Plan.styles';
import {Link} from 'react-router-dom';
import { useContext, useState,useEffect } from 'react';
import { AppContext } from '../../application/provider';
import { getItems } from '../../services/plans';
const Plan=()=> {
  const [state, setState] = useContext(AppContext);
  const [plans, setPlans] = useState([]);
  useEffect(()=>{getItems()
    .then(res =>setPlans(res))}
  ,[]);
  return <Test>
    {plans.filter(obj=>obj.id===state.idPlan).map((obj,key)=><div key={key}>
      <p>Name: {obj.name}</p>
      <p>Date: {obj.date}</p>
      <p>Description: {obj.description}</p>
      <p>Creator: {obj.creator}</p>
      <p>Users: {obj.users}</p>
      <ul>
        <li>Materials:</li>
        {obj.materials.map((obj2,key)=><li key={key}>{obj2}</li>)}
      </ul>
    </div>)}
    <input type="button" value="Apuntarse" />
    <br />
    <Link to="/plans">Atrás</Link>
    <br />
    <Link to="/">LogOut</Link>
  </Test>
}
export default Plan;
