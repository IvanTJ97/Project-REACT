import {Test} from './Jogo3raya.styles';
import {useState} from 'react';
export default ()=>{
  const [player,setPlayer]=useState(true);
  const [turn,setTurn]=useState(1);
  const [tablero,setTablero]=useState([
    {id:0,class:"",value:""},
    {id:1,class:"",value:""},
    {id:2,class:"",value:""},
    {id:3,class:"",value:""},
    {id:4,class:"",value:""},
    {id:5,class:"",value:""},
    {id:6,class:"",value:""},
    {id:7,class:"",value:""},
    {id:8,class:"",value:""}
  ]);
  const pulsar=input=>{
    if(input===0&&tablero[0].value===""){
      tablero[0].value=(player)?"X":"O";
      tablero[0].class=(player)?"playerX":"playerO";
      setPlayer(!player);
      setTurn(turn+1);
    }
    else if(input===1&&tablero[1].value===""){
      tablero[1].value=(player)?"X":"O";
      tablero[1].class=(player)?"playerX":"playerO";
      setPlayer(!player);
      setTurn(turn+1);
    }
    else if(input===2&&tablero[2].value===""){
      tablero[2].value=(player)?"X":"O";
      tablero[2].class=(player)?"playerX":"playerO";
      setPlayer(!player);
      setTurn(turn+1);
    }
    else if(input===3&&tablero[3].value===""){
      tablero[3].value=(player)?"X":"O";
      tablero[3].class=(player)?"playerX":"playerO";
      setPlayer(!player);
      setTurn(turn+1);
    }
    else if(input===4&&tablero[4].value===""){
      tablero[4].value=(player)?"X":"O";
      tablero[4].class=(player)?"playerX":"playerO";
      setPlayer(!player);
      setTurn(turn+1);
    }
    else if(input===5&&tablero[5].value===""){
      tablero[5].value=(player)?"X":"O";
      tablero[5].class=(player)?"playerX":"playerO";
      setPlayer(!player);
      setTurn(turn+1);
    }
    else if(input===6&&tablero[6].value===""){
      tablero[6].value=(player)?"X":"O";
      tablero[6].class=(player)?"playerX":"playerO";
      setPlayer(!player);
      setTurn(turn+1);
    }
    else if(input===7&&tablero[7].value===""){
      tablero[7].value=(player)?"X":"O";
      tablero[7].class=(player)?"playerX":"playerO";
      setPlayer(!player);
      setTurn(turn+1);
    }
    else if(input===8&& tablero[8].value===""){
      tablero[8].value=(player)?"X":"O";
      tablero[8].class=(player)?"playerX":"playerO";
      setPlayer(!player);
      setTurn(turn+1);
    };
    comp();
  };
  const comp=()=>{
    if(turn>=5){
      if(tablero[0].value===tablero[1].value&&tablero[0].value===tablero[2].value&&tablero[0].value==="X"||
        tablero[3].value===tablero[4].value&&tablero[3].value===tablero[5].value&&tablero[3].value==="X"||
        tablero[6].value===tablero[7].value&&tablero[6].value===tablero[8].value&&tablero[6].value==="X"||
        tablero[0].value===tablero[3].value&&tablero[0].value===tablero[6].value&&tablero[0].value==="X"||
        tablero[1].value===tablero[4].value&&tablero[1].value===tablero[7].value&&tablero[1].value==="X"||
        tablero[2].value===tablero[5].value&&tablero[2].value===tablero[8].value&&tablero[2].value==="X"||
        tablero[0].value===tablero[4].value&&tablero[0].value===tablero[8].value&&tablero[0].value==="X"||
        tablero[2].value===tablero[4].value&&tablero[2].value===tablero[6].value&&tablero[2].value==="X")
        {alert("Ha ganado el jugador 1")}
      else if(tablero[0].value===tablero[1].value&&tablero[0].value===tablero[2].value&&tablero[0].value==="O"||
        tablero[3].value===tablero[4].value&&tablero[3].value===tablero[5].value&&tablero[3].value==="O"||
        tablero[6].value===tablero[7].value&&tablero[6].value===tablero[8].value&&tablero[6].value==="O"||
        tablero[0].value===tablero[3].value&&tablero[0].value===tablero[6].value&&tablero[0].value==="O"||
        tablero[1].value===tablero[4].value&&tablero[1].value===tablero[7].value&&tablero[1].value==="O"||
        tablero[2].value===tablero[5].value&&tablero[2].value===tablero[8].value&&tablero[2].value==="O"||
        tablero[0].value===tablero[4].value&&tablero[0].value===tablero[8].value&&tablero[0].value==="O"||
        tablero[2].value===tablero[4].value&&tablero[2].value===tablero[6].value&&tablero[2].value==="O")
        {alert("Ha ganado el jugador 2")};
    };
  };
  return <Test>
    <h1>3 EN RAYA 1VS1</h1>
    <div className='container'>
      {tablero.map((obj,key)=><div key={obj.id} className={obj.class} onClick={()=>pulsar(obj.id)}>{obj.value}</div>)}
    </div>
    <div>Turno del jugador {(player)?"1":"2"}</div>
    <div>Turno: {turn}</div>
  </Test>
};
