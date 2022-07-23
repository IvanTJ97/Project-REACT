import { useState,useContext } from 'react';
import { AppContext } from '../application/provider';
////////////////////////////////////////////////////////////
import basto1 from '../data/cartas/basto1.png';
import basto2 from '../data/cartas/basto2.png';
import basto3 from '../data/cartas/basto3.png';
import basto4 from '../data/cartas/basto4.png';
import basto5 from '../data/cartas/basto5.png';
import basto6 from '../data/cartas/basto6.png';
import basto7 from '../data/cartas/basto7.png';
import basto8 from '../data/cartas/basto8.png';
import basto9 from '../data/cartas/basto9.png';
import basto10 from '../data/cartas/basto10.png';
import basto11 from '../data/cartas/basto11.png';
import basto12 from '../data/cartas/basto12.png';
////////////////////////////////////////////////////////////
import oro1 from '../data/cartas/oro1.png';
import oro2 from '../data/cartas/oro2.png';
import oro3 from '../data/cartas/oro3.png';
import oro4 from '../data/cartas/oro4.png';
import oro5 from '../data/cartas/oro5.png';
import oro6 from '../data/cartas/oro6.png';
import oro7 from '../data/cartas/oro7.png';
import oro8 from '../data/cartas/oro8.png';
import oro9 from '../data/cartas/oro9.png';
import oro10 from '../data/cartas/oro10.png';
import oro11 from '../data/cartas/oro11.png';
import oro12 from '../data/cartas/oro12.png';
////////////////////////////////////////////////////////////
import espada1 from '../data/cartas/espada1.png';
import espada2 from '../data/cartas/espada2.png';
import espada3 from '../data/cartas/espada3.png';
import espada4 from '../data/cartas/espada4.png';
import espada5 from '../data/cartas/espada5.png';
import espada6 from '../data/cartas/espada6.png';
import espada7 from '../data/cartas/espada7.png';
import espada8 from '../data/cartas/espada8.png';
import espada9 from '../data/cartas/espada9.png';
import espada10 from '../data/cartas/espada10.png';
import espada11 from '../data/cartas/espada11.png';
import espada12 from '../data/cartas/espada12.png';
////////////////////////////////////////////////////////////
import copa1 from '../data/cartas/copa1.png';
import copa2 from '../data/cartas/copa2.png';
import copa3 from '../data/cartas/copa3.png';
import copa4 from '../data/cartas/copa4.png';
import copa5 from '../data/cartas/copa5.png';
import copa6 from '../data/cartas/copa6.png';
import copa7 from '../data/cartas/copa7.png';
import copa8 from '../data/cartas/copa8.png';
import copa9 from '../data/cartas/copa9.png';
import copa10 from '../data/cartas/copa10.png';
import copa11 from '../data/cartas/copa11.png';
import copa12 from '../data/cartas/copa12.png';
////////////////////////////////////////////////////////////
import reves from '../data/cartas/reves.png';
const Carta=({palo,numero})=>{
    const { fase } = useContext(AppContext);
    const [fas, setFas] = fase;
    /////////////////////////////////////////////////////
    const [s,setS]=useState(false);
    const style={
        opacity:.2
    };
    const c=()=>{if(fas!==3)setS(!s)};
    if(numero===1){
        return (palo==="oro")?
        <img src={oro1} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="basto")?<img src={basto1} width="100" height="150" style={(s)?style:{}} onClick={c}/>: 
        (palo==="copa")?<img src={copa1} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada1} width="100" height="150" style={(s)?style:{}} onClick={c} />
    }
    else if(numero===2){
        return(palo==="oro")?
        <img src={oro2} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="basto")?<img src={basto2} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="copa")?<img src={copa2} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada2} width="100" height="150" style={(s)?style:{}} onClick={c}/>
    }
    else if(numero===3){
        return (palo==="oro")?
        <img src={oro3} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="basto")?<img src={basto3} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="copa")?<img src={copa3} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada3} width="100" height="150" style={(s)?style:{}} onClick={c}/>
    }
    else if(numero===4){
        return(palo==="oro")?
        <img src={oro4} width="100" height="150" style={(s) ? style : {}} onClick={c} /> :
        (palo==="basto")?<img src={basto4} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="copa")?<img src={copa4} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada4} width="100" height="150" style={(s)?style:{}} onClick={c}/>
    }
    else if(numero===5){
        return(palo==="oro")?
        <img src={oro5} width="100" height="150" style={(s) ? style : {}} onClick={c} /> :
        (palo==="basto")?<img src={basto5} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="copa")?<img src={copa5} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada5} width="100" height="150" style={(s)?style:{}} onClick={c}/>
    }
    else if(numero===6){
        return(palo==="oro")?
        <img src={oro6} width="100" height="150" style={(s) ? style : {}} onClick={c} /> :
        (palo==="basto")?<img src={basto6} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="copa")?<img src={copa6} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada6} width="100" height="150" style={(s)?style:{}} onClick={c}/>
    }
    else if(numero===7){
        return (palo==="oro")?
        <img src={oro7} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="basto")?<img src={basto7} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="copa")?<img src={copa7} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada7} width="100" height="150" style={(s)?style:{}} onClick={c}/>
    }
    else if(numero===8){
        return (palo==="oro")?
        <img src={oro8} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="basto")?<img src={basto8} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="copa")?<img src={copa8} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada8} width="100" height="150" style={(s)?style:{}} onClick={c}/>
    }
    else if(numero===9){
        return (palo==="oro")?
        <img src={oro9} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="basto")?<img src={basto9} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="copa")?<img src={copa9} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada9} width="100" height="150" style={(s)?style:{}} onClick={c}/>
    }
    else if(numero===10){
        return (palo==="oro")?
        <img src={oro10} width="100" height="150" style={(s) ? style : {}} onClick={c} /> :
        (palo==="basto")?<img src={basto10} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="copa")?<img src={copa10} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada10} width="100" height="150" style={(s)?style:{}} onClick={c}/>
    }
    else if(numero===11){
        return (palo==="oro")?
        <img src={oro11} width="100" height="150" style={(s) ? style : {}} onClick={c} /> :
        (palo==="basto")?<img src={basto11} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="copa")?<img src={copa11} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada11} width="100" height="150" style={(s)?style:{}} onClick={c}/>
    }
    else if(numero===12){
        return (palo==="oro")?
        <img src={oro12} width="100" height="150" style={(s) ? style : {}} onClick={c} /> :
        (palo==="basto")?<img src={basto12} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        (palo==="copa")?<img src={copa12} width="100" height="150" style={(s)?style:{}} onClick={c}/>:
        <img src={espada12} width="100" height="150" style={(s)?style:{}} onClick={c}/>
    }
    else return <img src={reves} width="100" height="150"/>
};
export default Carta;