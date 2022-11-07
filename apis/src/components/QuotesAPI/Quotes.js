import {useEffect,useState} from "react";
import axios from 'axios';
const Quotes=()=>{
    const [quote,setQuote]=useState({});
    const [randomize,setRandomize]=useState(false);
    useEffect(()=>{
        getQuote().then(res=>setQuote(res.data));
    },[randomize]);
    const getQuote=()=>axios("https://api.quotable.io/random");
    return <>
        <h2>QUOTES</h2>
        <p>{quote.content}</p>
        <p>{quote.author}</p>
        <button onClick={()=>setRandomize(!randomize)}>Randomize</button>
    </>
};
export default Quotes;