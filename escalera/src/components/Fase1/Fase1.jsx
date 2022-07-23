import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../application/provider';
import { Test,Container,TestL } from './Fase1.styles';
import Carta from '../carta';
const Fase1=()=>{
  const {cards,players,fase} = useContext(AppContext);
  const [cartas, setCartas]=cards;
  const [jugadores,setJugadores]=players;
  const [fas,setFas]=fase;
  //
  const [numJugador,setNumJugador]=useState(0);
  const [numCarta,setNumCarta]=useState(0);
  const palos=["oro","espada","copa","basto"];
  useEffect(()=>{
    barajar();
  },[]);
  const carta=(palo,numero)=>{return {palo,numero}};
  const barajar=()=>{
    let baraja=[];
    for(let i=0;i<4;i++){
      for(let j=1;j<=12;j++){
        baraja.push(carta(palos[i],j));
      };
    };
    setCartas(baraja);
  };
  const random=()=>{
    if(fas===1){const R=Math.floor(Math.random()*(cartas.length));
    jugadores[numJugador][numCarta]=cartas[R];
    cartas.splice(R,1);
    if(numCarta===4){
      if(numJugador===3)setFas(fas+1);
      else setNumJugador(numJugador+1);setNumCarta(0);
    }
    else setNumCarta(numCarta+1);}
  };
  return <Container>
    <h2>FASE 1</h2>
    <button onClick={()=>{random()}}>+</button>
    <div>
      <h3>JUGADOR 1</h3>
      <TestL>
        <div><Carta palo={jugadores[0][0].palo} numero={jugadores[0][0].numero}/></div>
        <div><Carta palo={jugadores[0][1].palo} numero={jugadores[0][1].numero}/></div>
        <div><Carta palo={jugadores[0][2].palo} numero={jugadores[0][2].numero}/></div>
        <div><Carta palo={jugadores[0][3].palo} numero={jugadores[0][3].numero}/></div>
        <div><Carta palo={jugadores[0][4].palo} numero={jugadores[0][4].numero}/></div>
      </TestL>
    </div>
    <div>
      <h3>JUGADOR 2</h3>
      <Test>
        <div><Carta palo={jugadores[1][0].palo} numero={jugadores[1][0].numero}/></div>
        <div><Carta palo={jugadores[1][1].palo} numero={jugadores[1][1].numero}/></div>
        <div><Carta palo={jugadores[1][2].palo} numero={jugadores[1][2].numero}/></div>
        <div><Carta palo={jugadores[1][3].palo} numero={jugadores[1][3].numero}/></div>
        <div><Carta palo={jugadores[1][4].palo} numero={jugadores[1][4].numero}/></div>
      </Test>
    </div>
    <div>
      <h3>JUGADOR 3</h3>
      <TestL>
        <div><Carta palo={jugadores[2][0].palo} numero={jugadores[2][0].numero}/></div>
        <div><Carta palo={jugadores[2][1].palo} numero={jugadores[2][1].numero}/></div>
        <div><Carta palo={jugadores[2][2].palo} numero={jugadores[2][2].numero}/></div>
        <div><Carta palo={jugadores[2][3].palo} numero={jugadores[2][3].numero}/></div>
        <div><Carta palo={jugadores[2][4].palo} numero={jugadores[2][4].numero}/></div>
      </TestL>
    </div>
    <div>
      <h3>JUGADOR 4</h3>
      <Test>
        <div><Carta palo={jugadores[3][0].palo} numero={jugadores[3][0].numero}/></div>
        <div><Carta palo={jugadores[3][1].palo} numero={jugadores[3][1].numero}/></div>
        <div><Carta palo={jugadores[3][2].palo} numero={jugadores[3][2].numero}/></div>
        <div><Carta palo={jugadores[3][3].palo} numero={jugadores[3][3].numero}/></div>
        <div><Carta palo={jugadores[3][4].palo} numero={jugadores[3][4].numero}/></div>
      </Test>
    </div>
  </Container>
};
export default Fase1;