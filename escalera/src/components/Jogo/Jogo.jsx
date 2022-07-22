import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../application/provider';
import { Test } from './Jogo.styles';
import Fase1 from '../Fase1/';
import Fase2 from '../Fase2/';
import Fase3 from '../Fase3/';
const Jogo = (props) =>{ 
  const {fase}=useContext(AppContext);
  const [fas,setFas]=fase;
  return <div className="JogoWrapper">
    {(fas===1)?<Fase1/>:(fas===2)?<Fase2/>:<Fase3/>}
  </div>
};
export default Jogo;
