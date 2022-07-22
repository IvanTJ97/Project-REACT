import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../application/provider';
import { Test } from './Fase1.styles';
const Fase1 = (props) => {
  const [cartas, setCartas] = useContext(AppContext);
  return <div className="Fase1Wrapper">
    <h2>FASE 1</h2>
  </div>
};
export default Fase1;
