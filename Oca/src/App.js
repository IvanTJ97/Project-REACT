import './style.css';
import Jogo from './components/JogoOca/'
import {useState} from 'react';
const App=()=>{
  const [select,setSelect]=useState(null);
  if(select===null)return <>
    <h2>Seleccione jugadores</h2> <br />
    <button onClick={()=>setSelect(1)}>Jugar 1</button> <br />
    <button onClick={()=>setSelect(2)}>Jugar 2</button> <br />
    <button onClick={()=>setSelect(3)}>Jugar 3</button> <br />
    <button onClick={()=>setSelect(4)}>Jugar 4</button> <br />
    <button onClick={()=>setSelect(5)}>Jugar 5</button> <br />
    <button onClick={()=>setSelect(6)}>Jugar 6</button>
  </>
  return <div>
    <Jogo select={select}/>
  </div>
}
export default App;
