import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../application/provider';
import { Test } from '../Fase1/Fase1.styles';
import Carta from '../carta';
const Fase3 = () =>{
  const { cards, fase } = useContext(AppContext);
  const [cartas, setCartas] = cards;
  const [fas, setFas] = fase;
  //
  const [serie,setSerie]=useState([{},{},{},{},{}]);
  const [numCarta,setNumCarta]=useState(0);
  const [rebaj,setRebaj]=useState(false);
  //
  const palos = ["oro", "espada", "copa", "basto"];
  useEffect(()=>{
    barajar();
  },[rebaj]);
  const carta = (palo, numero) => { return { palo, numero } };
  const barajar = () => {
    let baraja = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j <= 12; j++) {
        baraja.push(carta(palos[i], j));
      };
    };
    setCartas(baraja);
  };
  const suma=()=>{
    const R=Math.floor(Math.random()*(cartas.length));
    serie[numCarta]=cartas[R];
    cartas.splice(R,1);
    setNumCarta(numCarta+1);
  };
  const reload=()=>{
    setNumCarta(0);
    setSerie([{},{},{},{},{}]);
    setRebaj(!rebaj);
  };
  return <>
    <h2>FASE 3</h2>
    <button onClick={()=>{suma()}}>+</button>
    <button onClick={()=>{reload()}}>Reload</button>
    <Test>
      <div><Carta palo={serie[0].palo} numero={serie[0].numero}/></div>
      <div><Carta palo={serie[1].palo} numero={serie[1].numero}/></div>
      <div><Carta palo={serie[2].palo} numero={serie[2].numero}/></div>
      <div><Carta palo={serie[3].palo} numero={serie[3].numero}/></div>
      <div><Carta palo={serie[4].palo} numero={serie[4].numero}/></div>
    </Test>
  </>
}

export default Fase3;
