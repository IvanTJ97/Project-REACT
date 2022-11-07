import {useEffect,useState} from 'react';
import axios from 'axios';
import './Pokemon-style.css';
const PokemonAPI=()=>{
    const [data,setData]=useState([]);
    const [error,setError]=useState("");
    const [number,setNumber]=useState(0);
    const [pokemon,setPokemon]=useState({});
    const [search,setSearch]=useState("");
    useEffect(()=>{
        getData().then(res=>setData(res.data.results));
    },[]);
    const getData=()=>axios("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const getPokemon=(input=1)=>axios(`https://pokeapi.co/api/v2/pokemon/${input}/`);
    const buscar=async input=>{
        setNumber(1);
        setError("");
        try{
            const N=data.map(obj=>obj.name).indexOf(input);
            const pokemonData=await getPokemon(N+1).then(res=>res.data);
            const name=pokemonData.name;
            const number=pokemonData.id;
            const types=pokemonData.types.map(obj=>obj.type.name);
            const type1=types[0];
            const type2=(types.length>1)?types[1]:"";
            const stats=pokemonData.stats.map(obj=>obj.base_stat);
            const HP=stats[0];
            const A=stats[1];
            const D=stats[2];
            const SpA=stats[3];
            const SpD=stats[4];
            const S=stats[5];
            const Abilities=pokemonData.abilities.map(obj=>obj.ability);
            const Ab1=Abilities[0].name;
            const Ab2=(Abilities.length===3)?Abilities[1].name:"";
            const AbH=pokemonData.abilities.find(obj=>obj.is_hidden===true).ability.name;
            if(N<898){
                const img=pokemonData.sprites.front_default;
                setPokemon({name,img,number,type1,type2,HP,A,D,SpA,SpD,S,Ab1,Ab2,AbH});
            }
            else setPokemon({name,img:"",number,type1,type2,HP,A,D,SpA,SpD,S,Ab1,Ab2,AbH});
        }catch(e){setError(e);console.log(e)};
    };
    const filtro=()=>{
        return (search==="")?[]:data.filter(obj=>obj.name.substr(0,search.length).toLowerCase()===search.toLowerCase())
    };
    return <div className='Container'>
        <div>
            <h2>POKIMON</h2>
            <input type="text" onChange={e=>setSearch(e.target.value)}/> <br />
            {filtro().map((obj,key)=><p key={key}><button onClick={()=>buscar(obj.name)}>{obj.name}</button></p>)}
        </div>
        {(error!=="")?<p>{error.message}</p>:(number!==0)?<div>
            <img src={pokemon.img} alt="Pokimon"/>
            <p>{pokemon.name}</p>
            <p>Número Pokedex: {pokemon.number}</p>
            <p>Tipos: {pokemon.type1} {pokemon.type2}</p>
            <p>Habilidades: {pokemon.Ab1} // {pokemon.Ab2}</p>
            <p>Habilidad Oculta: {pokemon.AbH}</p>
            <p>Stats Base:</p>
            <p>HP: {pokemon.HP}</p>
            <p>Attack: {pokemon.A}</p>
            <p>Defense: {pokemon.D}</p>
            <p>Special Attack: {pokemon.SpA}</p>
            <p>Special Defense: {pokemon.SpD}</p>
            <p>Speed: {pokemon.S}</p>
        </div>:<p></p>}
    </div>;
}
export default PokemonAPI;