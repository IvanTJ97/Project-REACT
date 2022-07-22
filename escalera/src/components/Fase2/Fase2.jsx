import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../application/provider';
import { Test } from './Fase2.styles';
const Fase2 = (props) =>{
  const [cartas, setCartas] = useContext(AppContext);
  return <div className="Fase2Wrapper">
    Fase 2
  </div>
};

export default Fase2;
