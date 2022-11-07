import {useState} from "react";
const Monsters=()=>{
    const [search,setSearch]=useState("");
    const [number,setNumber]=useState(1);
    return <>
        <h2>MONSTRO</h2>
        <input type="text" onChange={e=>setSearch(e.target.value)}/>
        <input type="number" onChange={e=>setNumber(e.target.value)} max={5} min={1}/> <br />
        <img src={`https://robohash.org/${search}?set=set${number}`} alt="IMG"/>
    </>
};
export default Monsters;