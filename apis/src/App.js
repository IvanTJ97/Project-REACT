import {useState} from 'react';
import './App.css';
import PokemonAPI from './components/PokemonAPI/Pokemon';
import Quote from './components/QuotesAPI/Quotes';
import Monsters from './components/MonstersAPI/Monsters';
import RandomUser from './components/RandomUserAPI/RandomUser';
import Movies from './components/MoviesAPI/Movies';
//import Prueba from './components/pruebaPHP';
const App=()=>{
  const [option,setOption]=useState(0);
  const Menu=()=><div style={{marginBottom:25}}>
    <input type="button" value="Pokemon" onClick={()=>setOption(1)}/>
    <input type="button" value="Quote" onClick={()=>setOption(2)}/>
    <input type="button" value="Monsters" onClick={()=>setOption(3)}/>
    <input type="button" value="RandomUser" onClick={()=>setOption(4)}/>
    <input type="button" value="Movies" onClick={()=>setOption(5)}/>
  </div>;
  return <>
    <Menu/>
    {option===1?<PokemonAPI/>:option===2?<Quote/>:option===3?<Monsters/>:option===4?<RandomUser/>:option===5?<Movies/>:null}
  </>
};
export default App;