import {AppContext} from '../application/provider';
import {useContext,useState,useEffect} from 'react';
export default ()=>{
    const [state,setState]=useContext(AppContext);
    return <>
    <h1>AREA USER</h1>
    <p>Bienvenido, {state.name} id:{state.id}</p>
    </>
}