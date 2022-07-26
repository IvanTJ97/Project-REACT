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
    <h2>Seleccione jugadores: </h2> <br />
    <select name="players" id="players" onClick={e=>setPlayers(e.target.value)} style={style}>
      <option value="1">1 Jugador</option>
      <option value="2">2 Jugadores</option>
      <option value="3">3 Jugadores</option>
      <option value="4">4 Jugadores</option>
      <option value="5">5 Jugadores</option>
      <option value="6">6 Jugadores</option>
    </select>
    <button onClick={()=>setSelect(players)} style={style}>JUGAR</button>
  </>
  return <div>
    <Jogo select={select}/>
  </div>
}
export default App;
