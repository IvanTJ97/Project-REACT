import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../application/provider';
import { Test } from './Fase2.styles';
import Carta from '../carta';
const Fase2 = (props) =>{
  const { cards, players, fase } = useContext(AppContext);
  const [cartas, setCartas] = cards;
  const [jugadores, setJugadores] = players;
  const [fas, setFas] = fase;
  useEffect(()=>{
    piramide();
  },[]);
  const piramide=()=>{
    
  }
  return <div className="Fase2Wrapper">
    <h2>FASE 2</h2>
    <button onClick={()=>{console.log(cartas);console.log(jugadores)}}>ver</button>
    <Test>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Test>
  </div>
};

export default Fase2;
