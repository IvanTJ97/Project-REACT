import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../application/provider';
import { Test } from './Jogo.styles';
import Fase1 from '../Fase1/';
import Fase2 from '../Fase2/';
import Fase3 from '../Fase3/';
import Fase4 from '../Fase4';
const Jogo = (props) =>{ 
  const {fase}=useContext(AppContext);
  const [fas,setFas]=fase;
  return <div className="JogoWrapper">
    {(fas===1)?<Fase1/>:(fas===2)?<><Fase1/><Fase2/></>:(fas===3)?<Fase3/>:<Fase4/>}
  </div>
};
export default Jogo;
