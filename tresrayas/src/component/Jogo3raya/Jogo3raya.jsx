import {Test} from './Jogo3raya.styles';
import {useState} from 'react';
export default ()=>{
  const [player,setPlayer]=useState(1);
  const [turn,setTurn]=useState(1);
  const [c1,setC1]=useState("");
  const [c2,setC2]=useState("");
  const [c3,setC3]=useState("");
  const [c4,setC4]=useState("");
  const [c5,setC5]=useState("");
  const [c6,setC6]=useState("");
  const [c7,setC7]=useState("");
  const [c8,setC8]=useState("");
  const [c9,setC9]=useState("");
  const [casillas,setCasillas]=useState({
    c1:0,
    c2:0,
    c3:0,
    c4:0,
    c5:0,
    c6:0,
    c7:0,
    c8:0,
    c9:0
  });
  const pulsar=input=>{
    if(player==1){
      if(input==1&&casillas.c1==0){setC1("X");setCasillas({...casillas,c1:1});setPlayer(2);setTurn(turn+1)}
      else if(input==2&&casillas.c2==0){setC2("X");setCasillas({...casillas,c2:1});setPlayer(2);setTurn(turn+1)}
      else if(input==3&&casillas.c3==0){setC3("X");setCasillas({...casillas,c3:1});setPlayer(2);setTurn(turn+1)}
      else if(input==4&&casillas.c4==0){setC4("X");setCasillas({...casillas,c4:1});setPlayer(2);setTurn(turn+1)}
      else if(input==5&&casillas.c5==0){setC5("X");setCasillas({...casillas,c5:1});setPlayer(2);setTurn(turn+1)}
      else if(input==6&&casillas.c6==0){setC6("X");setCasillas({...casillas,c6:1});setPlayer(2);setTurn(turn+1)}
      else if(input==7&&casillas.c7==0){setC7("X");setCasillas({...casillas,c7:1});setPlayer(2);setTurn(turn+1)}
      else if(input==8&&casillas.c8==0){setC8("X");setCasillas({...casillas,c8:1});setPlayer(2);setTurn(turn+1)}
      else if(input==9&&casillas.c9==0){setC9("X");setCasillas({...casillas,c9:1});setPlayer(2);setTurn(turn+1)};
    }
    else if(player==2){
      if(input==1&&casillas.c1==0){setC1("O");setCasillas({...casillas,c1:2});setPlayer(1);setTurn(turn+1)}
      else if(input==2&&casillas.c2==0){setC2("O");setCasillas({...casillas,c2:2});setPlayer(1);setTurn(turn+1)}
      else if(input==3&&casillas.c3==0){setC3("O");setCasillas({...casillas,c3:2});setPlayer(1);setTurn(turn+1)}
      else if(input==4&&casillas.c4==0){setC4("O");setCasillas({...casillas,c4:2});setPlayer(1);setTurn(turn+1)}
      else if(input==5&&casillas.c5==0){setC5("O");setCasillas({...casillas,c5:2});setPlayer(1);setTurn(turn+1)}
      else if(input==6&&casillas.c6==0){setC6("O");setCasillas({...casillas,c6:2});setPlayer(1);setTurn(turn+1)}
      else if(input==7&&casillas.c7==0){setC7("O");setCasillas({...casillas,c7:2});setPlayer(1);setTurn(turn+1)}
      else if(input==8&&casillas.c8==0){setC8("O");setCasillas({...casillas,c8:2});setPlayer(1);setTurn(turn+1)}
      else if(input==9&&casillas.c9==0){setC9("O");setCasillas({...casillas,c9:2});setPlayer(1);setTurn(turn+1)};
    };
    ganar();
  };
  const ganar=()=>{
    let v=0;
    if(turn>5){
      if(casillas.c1==casillas.c2&&casillas.c2==casillas.c3&&casillas.c1==1||
        casillas.c4==casillas.c5&&casillas.c5==casillas.c6&&casillas.c4==1||
        casillas.c7==casillas.c8&&casillas.c8==casillas.c9&&casillas.c7==1||
        casillas.c1==casillas.c4&&casillas.c4==casillas.c7&&casillas.c1==1||
        casillas.c2==casillas.c5&&casillas.c5==casillas.c8&&casillas.c2==1||
        casillas.c3==casillas.c6&&casillas.c6==casillas.c9&&casillas.c3==1||
        casillas.c1==casillas.c5&&casillas.c5==casillas.c9&&casillas.c1==1||
        casillas.c3==casillas.c5&&casillas.c5==casillas.c7&&casillas.c3==1){v=1}
      else if(casillas.c1==casillas.c2&&casillas.c2==casillas.c3&&casillas.c1==2||
        casillas.c4==casillas.c5&&casillas.c5==casillas.c6&&casillas.c4==2||
        casillas.c7==casillas.c8&&casillas.c8==casillas.c9&&casillas.c7==2||
        casillas.c1==casillas.c4&&casillas.c4==casillas.c7&&casillas.c1==2||
        casillas.c2==casillas.c5&&casillas.c5==casillas.c8&&casillas.c2==2||
        casillas.c3==casillas.c6&&casillas.c6==casillas.c9&&casillas.c3==2||
        casillas.c1==casillas.c5&&casillas.c5==casillas.c9&&casillas.c1==2||
        casillas.c3==casillas.c5&&casillas.c5==casillas.c7&&casillas.c3==2){v=2}
    }
    if(v==1){alert("Ha ganado el jugador 1")}
    else if(v==2){alert("Ha ganado el jugador 2")}
  }
  return <Test>
    <h1>3 EN RAYA</h1>
    <div className='container'>
      <div  className={`player${c1}`} onClick={()=>{pulsar(1)}}><h2>{c1}</h2></div>
      <div  className={`player${c2}`} onClick={()=>{pulsar(2)}}><h2>{c2}</h2></div>
      <div  className={`player${c3}`} onClick={()=>{pulsar(3)}}><h2>{c3}</h2></div>
      <div  className={`player${c4}`} onClick={()=>{pulsar(4)}}><h2>{c4}</h2></div>
      <div  className={`player${c5}`} onClick={()=>{pulsar(5)}}><h2>{c5}</h2></div>
      <div  className={`player${c6}`} onClick={()=>{pulsar(6)}}><h2>{c6}</h2></div>
      <div  className={`player${c7}`} onClick={()=>{pulsar(7)}}><h2>{c7}</h2></div>
      <div  className={`player${c8}`} onClick={()=>{pulsar(8)}}><h2>{c8}</h2></div>
      <div  className={`player${c9}`} onClick={()=>{pulsar(9)}}><h2>{c9}</h2></div>
    </div>
    <div>{(turn<10)?`Turno del jugador ${player}`:""}</div>
    <div>{(turn<10)?`Turno: ${turn}`:""}</div>
  </Test>
};
