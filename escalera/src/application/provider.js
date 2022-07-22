import {createContext,useState} from 'react';
export default ({children})=>{
    const [cartas, setCartas] = useState({});
    return (
        <AppContext.Provider value={[cartas, setCartas]}>
            {children}
        </AppContext.Provider>
    );
}
export const AppContext=createContext();