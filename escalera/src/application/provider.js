import {createContext,useState} from 'react';
export default ({children})=>{
    const [cards, setCards]=useState([]);
    const [players, setPlayers]=useState([[{},{},{},{},{}],[{},{},{},{},{}],[{},{},{},{},{}],[{},{},{},{},{}]]);
    const [fase,setFase]=useState(1);
    return (
        <AppContext.Provider value={{cards:[cards, setCards],players:[players,setPlayers],fase:[fase,setFase]}}>
            {children}
        </AppContext.Provider>
    );
}
export const AppContext=createContext();