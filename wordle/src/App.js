import './App.css';
import {useState} from 'react';
import Linea from './Linea/';
const App=()=>{
  const [pos,setPos]=useState(1);
  const [fila,setFila]=useState(1);
  const PALABRA=["M","A","R","E","O"];
  const [fila1,setFila1]=useState(["red","red","red","red","red"]);
  const [letraP,setLetraP]=useState("");
  const [letraS,setLetraS]=useState("");
  const [letraT,setLetraT]=useState("");
  const [letraC,setLetraC]=useState("");
  const [letraQ,setLetraQ]=useState("");
  const marcar=input=>{
    (pos===1)?setLetraP(input):
    (pos===2)?setLetraS(input):
    (pos===3)?setLetraT(input):
    (pos===4)?setLetraC(input):
    (pos===5)?setLetraQ(input):
    setLetraQ(letraQ);
    (pos>5)?setPos(6):setPos(pos+1);
  };
  const borrar=()=>{
    (pos===2)?setLetraP(""):
    (pos===3)?setLetraS(""):
    (pos===4)?setLetraT(""):
    (pos===5)?setLetraC(""):
    setLetraQ("");
    (pos===1)?setPos(1):setPos(pos-1);
    console.log(pos);
  }
  const enter=()=>{
    setFila(fila+1);
    if(letraQ!==""){
      const RESPUESTA=[letraP,letraS,letraT,letraC,letraQ];
      const COMPROBANTE=PALABRA;
      for(let i=0;i<5;i++){
        if(RESPUESTA[i]===PALABRA[i]){setFila1(fila1[i]="green");RESPUESTA[i]="";COMPROBANTE[i]=""};
      };
      for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
          if(RESPUESTA[i]!==""&&RESPUESTA[i]===COMPROBANTE[j]){setFila1(fila1[i]="yellow");RESPUESTA[i]="";COMPROBANTE[j]=""};
        }
      }
      console.log(fila1);
      console.log(RESPUESTA);
      console.log(COMPROBANTE);
    }
    else{alert("NOP")}
  }
  return <div className="container">
      <div className="tablero">
        <Linea P={(fila===1)?letraP:""}S={(fila===1)?letraS:""}T={(fila===1)?letraT:""}C={(fila===1)?letraC:""}Q={(fila===1)?letraQ:""} />
        <Linea P={(fila===2)?letraP:""}S={(fila===2)?letraS:""}T={(fila===2)?letraT:""}C={(fila===2)?letraC:""}Q={(fila===2)?letraQ:""} />
        <Linea P={(fila===3)?letraP:""}S={(fila===3)?letraS:""}T={(fila===3)?letraT:""}C={(fila===3)?letraC:""}Q={(fila===3)?letraQ:""} />
        <Linea P={(fila===4)?letraP:""}S={(fila===4)?letraS:""}T={(fila===4)?letraT:""}C={(fila===4)?letraC:""}Q={(fila===4)?letraQ:""} />
        <Linea P={(fila===5)?letraP:""}S={(fila===5)?letraS:""}T={(fila===5)?letraT:""}C={(fila===5)?letraC:""}Q={(fila===5)?letraQ:""} />
        <Linea P={(fila===6)?letraP:""}S={(fila===6)?letraS:""}T={(fila===6)?letraT:""}C={(fila===6)?letraC:""}Q={(fila===6)?letraQ:""} />
      </div>
      <div className="teclado">
        <div className="letrab" onClick={()=>{marcar("Q")}}>Q</div>
        <div className="letrab" onClick={()=>{marcar("W")}}>W</div>
        <div className="letrab" onClick={()=>{marcar("E")}}>E</div>
        <div className="letrab" onClick={()=>{marcar("R")}}>R</div>
        <div className="letrab" onClick={()=>{marcar("T")}}>T</div>
        <div className="letrab" onClick={()=>{marcar("Y")}}>Y</div>
        <div className="letrab" onClick={()=>{marcar("U")}}>U</div>
        <div className="letrab" onClick={()=>{marcar("I")}}>I</div>
        <div className="letrab" onClick={()=>{marcar("O")}}>O</div>
        <div className="letrab" onClick={()=>{marcar("P")}}>P</div>
        <div className="letrab" onClick={()=>{marcar("A")}}>A</div>
        <div className="letrab" onClick={()=>{marcar("S")}}>S</div>
        <div className="letrab" onClick={()=>{marcar("D")}}>D</div>
        <div className="letrab" onClick={()=>{marcar("F")}}>F</div>
        <div className="letrab" onClick={()=>{marcar("G")}}>G</div>
        <div className="letrab" onClick={()=>{marcar("H")}}>H</div>
        <div className="letrab" onClick={()=>{marcar("J")}}>J</div>
        <div className="letrab" onClick={()=>{marcar("K")}}>K</div>
        <div className="letrab" onClick={()=>{marcar("L")}}>L</div>
        <div className="letrab" onClick={()=>{marcar("Ñ")}}>Ñ</div>
        <div className="letrab" onClick={()=>{marcar("Z")}}>Z</div>
        <div className="letrab" onClick={()=>{marcar("X")}}>X</div>
        <div className="letrab" onClick={()=>{marcar("C")}}>C</div>
        <div className="letrab" onClick={()=>{marcar("V")}}>V</div>
        <div className="letrab" onClick={()=>{marcar("B")}}>B</div>
        <div className="letrab" onClick={()=>{marcar("N")}}>N</div>
        <div className="letrab" onClick={()=>{marcar("M")}}>M</div>
        <div className="blanco"></div>
        <div className="borrar" onClick={()=>{borrar()}}>Borrar</div>
        <div className="enter" onClick={()=>{enter()}}>Enter</div>
      </div>
    </div>
};
export default App;