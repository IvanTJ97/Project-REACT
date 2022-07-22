import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../application/provider';
import { Test,Container} from './Fase2.styles';
import Carta from '../carta';
const Fase2 = (props) =>{
  const {cards,fase}=useContext(AppContext);
  const [cartas,setCartas] = cards;
  const [fas,setFas]=fase;
  //
  const [pir,setPir]=useState(null);
  useEffect(()=>{
    piramide();
  },[]);
  const piramide=()=>{
    let S=[];
    for(let i=0;i<11;i++){
      const R=Math.floor(Math.random()*(cartas.length));
      S.push(cartas[R]);
      cartas.splice(R,1);
    };
    setPir(S);
  };
  if(pir===null)return <>LOADING...</>;
  return <Container>
    <h2>FASE 2</h2>
    <Test>
      <div className='C1'><Carta palo={pir[0].palo} numero={pir[0].numero}/></div>
      <div className='C2'><Carta palo={pir[1].palo} numero={pir[1].numero}/></div>
      <div className='C3'><Carta palo={pir[2].palo} numero={pir[2].numero}/></div>
      <div className='C4'><Carta palo={pir[3].palo} numero={pir[3].numero}/></div>
      <div className='C5'><Carta palo={pir[4].palo} numero={pir[4].numero}/></div>
      <div className='C6'><Carta palo={pir[5].palo} numero={pir[5].numero}/></div>
      <div className='C7'><Carta palo={pir[6].palo} numero={pir[6].numero}/></div>
      <div className='C8'><Carta palo={pir[7].palo} numero={pir[7].numero}/></div>
      <div className='C9'><Carta palo={pir[8].palo} numero={pir[8].numero}/></div>
      <div className='C10'><Carta palo={pir[9].palo} numero={pir[9].numero}/></div>
      <div className='C11'><Carta palo={pir[10].palo} numero={pir[10].numero}/></div>
    </Test>
    <button onClick={()=>setFas(3)}>Ir a la fase 3</button>
  </Container>
};

export default Fase2;
