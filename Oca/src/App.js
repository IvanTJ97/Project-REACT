import './style.css';
import Jogo from './components/JogoOca/'
import {useState} from 'react';
const App=()=>{
  const [select,setSelect]=useState(null);
  const [players,setPlayers]=useState(null);
  const style={
    marginLeft:"20px",
    padding:"30px",
    background:"#000",
    color:"#fff"
  };
  if(select===null)return <>
    <h2>Seleccione el número de jugadores: </h2> <br />
    <button onClick={()=>setSelect(1)} style={style}>1 JUGADOR</button>
    <button onClick={()=>setSelect(2)} style={style}>2 JUGADORES</button>
    <button onClick={()=>setSelect(3)} style={style}>3 JUGADORES</button>
    <button onClick={()=>setSelect(4)} style={style}>4 JUGADORES</button>
    <button onClick={()=>setSelect(5)} style={style}>5 JUGADORES</button>
    <button onClick={()=>setSelect(6)} style={style}>6 JUGADORES</button>
  </>
  return <div>
    <Jogo select={select}/>
  </div>
}
export default App;
