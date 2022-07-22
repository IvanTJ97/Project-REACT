import {useState} from 'react';
import { Test } from './Jogo.styles';
import Fase1 from '../Fase1/';
import Fase2 from '../Fase2/';
import Fase3 from '../Fase3/';
const Jogo = (props) =>{ 
  const [fase,setFase]=useState(1);
  return <div className="JogoWrapper">
    <button onClick={()=>setFase(fase+1)}>Pasar Fase</button>
    {(fase===1)?<Fase1/>:(fase===2)?<Fase2/>:<Fase3/>}
  </div>
};
export default Jogo;
