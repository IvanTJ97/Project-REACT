import './App.css';
import {Container} from './Style';
import {useState,useEffect} from 'react';
import { getItems } from './app/api';
const App=()=>{
  const [PALABRA,setPALABRA]=useState([]);
  const [visible,setVisible]=useState(false);
  const [visible2,setVisible2]=useState(false);
  const [pos,setPos]=useState(1);
  const [fila,setFila]=useState(1);
  const TECLADO=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M"];
  const [palabras,setPalabras]=useState([]);
  const [array, setArray] = useState([
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}, 
    {value:"",class:""}
  ]);
  useEffect(()=>{
    getItems()
      .then(res=>setPalabras(res))
  },[]);
  const generarPalabra=()=>{
    const PRUEBA=palabras[Math.floor(Math.random()*12)].value;
    setPALABRA(PRUEBA.split(""));
    setVisible(true);
  }
  const marcar=input=>{
    if(fila===1){
      (pos===1)?array[0].value=input:
      (pos===2)?array[1].value=input:
      (pos===3)?array[2].value=input:
      (pos===4)?array[3].value=input:
      (pos===5)?array[4].value=input:
      array[4].value=array[4].value;
    }
    else if(fila===2){
      (pos===1)?array[5].value=input:
      (pos===2)?array[6].value=input:
      (pos===3)?array[7].value=input:
      (pos===4)?array[8].value=input:
      (pos===5)?array[9].value=input:
      array[9].value=array[9].value;
    }
    else if(fila===3){
      (pos===1)?array[10].value=input:
      (pos===2)?array[11].value=input:
      (pos===3)?array[12].value=input:
      (pos===4)?array[13].value=input:
      (pos===5)?array[14].value=input:
      array[14].value=array[14].value;
    }
    else if(fila===4){
      (pos===1)?array[15].value=input:
      (pos===2)?array[16].value=input:
      (pos===3)?array[17].value=input:
      (pos===4)?array[18].value=input:
      (pos===5)?array[19].value=input:
      array[19].value=array[19].value;
    }
    else if(fila===5){
      (pos===1)?array[20].value=input:
      (pos===2)?array[21].value=input:
      (pos===3)?array[22].value=input:
      (pos===4)?array[23].value=input:
      (pos===5)?array[24].value=input:
      array[24].value=array[24].value;
    }
    else if(fila===6){
      (pos===1)?array[25].value=input:
      (pos===2)?array[26].value=input:
      (pos===3)?array[27].value=input:
      (pos===4)?array[28].value=input:
      (pos===5)?array[29].value=input:
      array[29].value=array[29].value;
    }
    (pos>5)?setPos(6):setPos(pos+1);
  };
  const borrar=()=>{
    if(fila===1){
      (pos===2)?array[0].value="":
      (pos===3)?array[1].value="":
      (pos===4)?array[2].value="":
      (pos===5)?array[3].value="":
      array[4].value="";
    }
    else if(fila===2){
      (pos===2)?array[5].value="":
      (pos===3)?array[6].value="":
      (pos===4)?array[7].value="":
      (pos===5)?array[8].value="":
      array[9].value="";
    }
    else if(fila===3){
      (pos===2)?array[10].value="":
      (pos===3)?array[11].value="":
      (pos===4)?array[12].value="":
      (pos===5)?array[13].value="":
      array[14].value="";
    }
    else if(fila===4){
      (pos===2)?array[15].value="":
      (pos===3)?array[16].value="":
      (pos===4)?array[17].value="":
      (pos===5)?array[18].value="":
      array[19].value="";
    }
    else if(fila===5){
      (pos===2)?array[20].value="":
      (pos===3)?array[21].value="":
      (pos===4)?array[22].value="":
      (pos===5)?array[23].value="":
      array[24].value="";
    }
    else if(fila===6){
      (pos===2)?array[25].value="":
      (pos===3)?array[26].value="":
      (pos===4)?array[27].value="":
      (pos===5)?array[28].value="":
      array[29].value="";
    }
    (pos===1)?setPos(1):setPos(pos-1);
  }
  const enter=()=>{
    let answer,points=0,rest=[...PALABRA];
    if(fila===1&&array[4].value!==""){
      answer=[array[0].value,array[1].value,array[2].value,array[3].value,array[4].value];
      for(let i=0;i<5;i++){
        if(array[i].value===PALABRA[i]){
          array[i].class="green";
          answer[i]="";
          rest[i]="";
          points++;
        }
        else array[i].class="red";
      };
      for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
          if(answer[i]!==""&&answer[i]===rest[j]){
            array[i].class="yellow";
            answer[i]="";
            rest[j]="";
          }
        }
      };
      (points===5)?ganar():points=0;
      setFila(fila+1);
      setPos(1);
    }
    else if(fila===2&&array[9].value!==""){
      answer=[array[5].value,array[6].value,array[7].value,array[8].value,array[9].value];
      for(let i=0;i<5;i++){
        if(array[i+5].value===PALABRA[i]){
          array[i+5].class="green";
          answer[i]="";
          rest[i]="";
          points++;
        }
        else array[i+5].class="red";
      };
      for (let i=0;i<5;i++){
        for(let j=0;j<5;j++){
          if(answer[i]!==""&&answer[i]===rest[j]) {
            array[i+5].class="yellow";
            answer[i]="";
            rest[j]="";
          }
        }
      };
      (points===5)?ganar():points=0;
      setFila(fila+1);
      setPos(1);
    }
    else if(fila===3&&array[14].value!==""){
      answer=[array[10].value,array[11].value,array[12].value,array[13].value,array[14].value];
      for(let i=0;i<5;i++){
        if(array[i+10].value===PALABRA[i]) {
          array[i+10].class="green";
          answer[i]="";
          rest[i]="";
          points++;
        }
        else array[i+10].class="red";
      };
      for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
          if(answer[i]!==""&&answer[i]===rest[j]){
            array[i+10].class="yellow";
            answer[i]="";
            rest[j]="";
          }
        }
      };
      (points===5)?ganar():points=0;
      setFila(fila+1);
      setPos(1);
    }
    else if(fila===4&&array[19].value!==""){
      answer=[array[15].value,array[16].value,array[17].value,array[18].value,array[19].value];
      for(let i=0;i<5;i++){
        if(array[i+15].value===PALABRA[i]){
          array[i+15].class="green";
          answer[i]="";
          rest[i]="";
          points++;
        }
        else array[i+15].class="red";
      };
      for(let i=0;i<5;i++){
        for(let j=0;j<5;j++) {
          if(answer[i]!==""&&answer[i]===rest[j]){
            array[i+15].class="yellow";
            answer[i]="";
            rest[j]="";
          }
        }
      };
      (points===5)?ganar():points=0;
      setFila(fila+1);
      setPos(1);
    }
    else if(fila===5&& array[24].value!==""){
      answer=[array[20].value,array[21].value,array[22].value,array[23].value,array[24].value];
      for(let i=0;i<5;i++){
        if (array[i+20].value===PALABRA[i]){
          array[i+20].class="green";
          answer[i]="";
          rest[i]="";
          points++;
        }
        else array[i+20].class="red";
      };
      for(let i=0;i<5;i++){
        for(let j=0;j<5;j++) {
          if (answer[i]!==""&&answer[i]===rest[j]){
            array[i+20].class="yellow";
            answer[i]="";
            rest[j]="";
          }
        }
      };
      (points===5)?ganar():points=0;
      setFila(fila+1);
      setPos(1);
    }
    else if(fila===6&&array[29].value!==""){
      answer=[array[25].value,array[26].value,array[27].value,array[28].value,array[29].value];
      for(let i=0;i<5;i++){
        if (array[i+25].value===PALABRA[i]){
          array[i+25].class="green";
          answer[i]="";
          rest[i]="";
          points++;
        }
        else array[i+25].class = "red";
      };
      for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
          if(answer[i]!==""&&answer[i]===rest[j]){
            array[i+25].class="yellow";
            answer[i]="";
            rest[j]="";
          }
        }
      };
      (points===5)?ganar():points=0;
      setFila(fila+1);
      setPos(1);
    }
  };
  const ganar=()=>{
    alert("HAS GANADO");
    window.location.reload(false);
  }
  return <Container visible={visible}>
      <div className="inicio" visible={visible}>
        <input type="button" value="COMENZAR" onClick={generarPalabra}/>
        <h1>¡HAS GANADO!</h1>
      </div>
      <div className="tablero" visible={visible}>
        {array.map((obj,i)=><div key={i} className={obj.class}>{obj.value}</div>)}
      </div>
      <div className="teclado" visible={visible}>
        {TECLADO.map((obj,i)=><div key={i} onClick={()=>{marcar(`${obj}`)}}>{obj}</div>)}
        <div className="blanco"></div>
        <div onClick={()=>{borrar()}}>Borrar</div>
        <div onClick={()=>{enter()}}>Enter</div>
      </div>
    </Container>
};
export default App;