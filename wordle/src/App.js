import './App.css';
import {useState} from 'react';
const App=()=>{
  const [pos,setPos]=useState(1);
  const [fila,setFila]=useState(1);
  const [array, setArray] = useState([
    {value:"",class:"green"}, 
    {value:"",class:"red"}, 
    {value:"",class:"yellow"}, 
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
  const TECLADO=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M"];
  const PRUEBA="MAREO";
  console.log(PRUEBA.split(""));
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
    if(fila===1&&array[4].value!==""){
      setFila(fila+1);
      setPos(1);
    }
    else if(fila===2&&array[9].value!==""){
      setFila(fila+1);
      setPos(1);
    }
    else if(fila===3&&array[14].value!==""){
      setFila(fila+1);
      setPos(1);
    }
    else if(fila===4&&array[19].value!==""){
      setFila(fila+1);
      setPos(1);
    }
    else if(fila===5&& array[24].value!==""){
      setFila(fila+1);
      setPos(1);
    }
    else if(fila===6&&array[29].value!==""){
      setFila(fila+1);
      setPos(1);
    }
  }
  return <div className="container">
      <div className="tablero">
        {array.map((obj,i)=><div key={i} className={obj.class}>{obj.value}</div>)}
      </div>
      <div className="teclado">
        {TECLADO.map((obj,i)=><div key={i} onClick={()=>{marcar(`${obj}`)}}>{obj}</div>)}
        <div className="blanco"></div>
        <div onClick={()=>{borrar()}}>Borrar</div>
        <div onClick={()=>{enter()}}>Enter</div>
      </div>
    </div>
};
export default App;