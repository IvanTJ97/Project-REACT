import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../application/provider';
import { Test } from '../Fase1/Fase1.styles';
import Carta from '../carta';
const Fase3 = () =>{
  const {cards,fase}=useContext(AppContext);
  const [cartas,setCartas]=cards;
  const [fas,setFas]=fase;
  //
  const [serie,setSerie]=useState([{},{},{},{},{}]);
  const [numCarta,setNumCarta]=useState(0);
  //
  const palos = ["oro", "espada", "copa", "basto"];
  useEffect(()=>{
    barajar({});
  },[]);
  const carta=(palo,numero)=>{return {palo,numero}};
  const barajar=input=>{
    let baraja=[];
    for(let i=0;i<4;i++){
      for(let j=1;j<=12;j++){
        baraja.push(carta(palos[i],j));
      };
    };
    baraja.splice(baraja.indexOf(input), 1);
    setCartas(baraja);
  };
  const suma=()=>{
    if(numCarta<=4){
      const R=Math.floor(Math.random()*(cartas.length));
      serie[numCarta]=cartas[R];
      cartas.splice(R,1);
      setNumCarta(numCarta+1);
    }
    else setFas(4);
  };
  const reload=()=>{
    if(numCarta!==0){
      const N=(numCarta!==5)?serie.map(obj=>obj.palo).indexOf(undefined)-1:4;
      const C=serie[N];
      setSerie([C,{},{},{},{}]);
      setNumCarta(1);
      barajar(C);
    }
  };
  const style={
    textAlign:"center",
    padding:"20px 0",
    width:"100%"
  }
  return <>
    <h2 style={style}>FASE 3</h2>
    <button style={style} onClick={suma}>{(numCarta<=4)?"+":"Avanzar"}</button> <br /> <br />
    <button style={style} onClick={reload}>Reload</button> <br /><br />
    <Test>
      <div><Carta palo={serie[0].palo} numero={serie[0].numero}/></div>
      <div><Carta palo={serie[1].palo} numero={serie[1].numero}/></div>
      <div><Carta palo={serie[2].palo} numero={serie[2].numero}/></div>
      <div><Carta palo={serie[3].palo} numero={serie[3].numero}/></div>
      <div><Carta palo={serie[4].palo} numero={serie[4].numero}/></div>
    </Test>
  </>
};
export default Fase3;