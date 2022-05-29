import './App.css';
import {useState} from 'react';
export default ()=>{
  const [pos,setPos]=useState(1);
  const PALABRA=["M","A","R","E","O"];
  const [fila1,setFila1]=useState(["red","red","red","red","red"]);
  const [letraP,setLetraP]=useState("");
  const [letraS,setLetraS]=useState("");
  const [letraT,setLetraT]=useState("");
  const [letraC,setLetraC]=useState("");
  const [letraQ,setLetraQ]=useState("");
  const marcar=input=>{
    (pos==1)?setLetraP(input):
    (pos==2)?setLetraS(input):
    (pos==3)?setLetraT(input):
    (pos==4)?setLetraC(input):
    (pos==5)?setLetraQ(input):
    setLetraQ(letraQ);
    (pos>5)?setPos(6):setPos(pos+1);
  };
  const borrar=()=>{
    (pos==2)?setLetraP(""):
    (pos==3)?setLetraS(""):
    (pos==4)?setLetraT(""):
    (pos==5)?setLetraC(""):
    setLetraQ("");
    (pos==1)?setPos(1):setPos(pos-1);
    console.log(pos);
  }
  const enter=()=>{
    if(letraQ!=""){
      const RESPUESTA=[letraP,letraS,letraT,letraC,letraQ];
      for(let i=0;i<5;i++){
        if(RESPUESTA[i]==PALABRA[i])setFila1(fila1[i]="green");
        else setFila1(fila1[i]="red");
      };
      console.log(fila1);
    }
    else{alert("NOP")}
  }
  return <div className="container">
      <div className="tablero">
        <div className="letter" style={{backgroundColor:fila1[0]}}>{letraP}</div>
        <div className="letter" style={{backgroundColor:fila1[1]}}>{letraS}</div>
        <div className="letter" style={{backgroundColor:fila1[2]}}>{letraT}</div>
        <div className="letter" style={{backgroundColor:fila1[3]}}>{letraC}</div>
        <div className="letter" style={{backgroundColor:fila1[4]}}>{letraQ}</div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
        <div className="letter"></div>
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
