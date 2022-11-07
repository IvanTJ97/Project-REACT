import {useState} from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import {createMember,getMembers} from '../../app/api';
import "./style.css";
import {objectCreator,readUploadFile,exportFile} from '../excel';
const App=()=>{
  const [c,setC]=useState(false);
  ////////////////////////////////////////////////
  const [data,setData]=useState([]);
  const [nights,setNights]=useState(1);
  ///////////////////////////////////////////////
  const [nameIn,setNameIn]=useState(null);
  const [cenaIn,setCenaIn]=useState("Si");
  const [tipoIn,setTipoIn]=useState("Ron");
  const [cantidadIn,setCantidadIn]=useState("Mucho");
  const read=async input=>{
    const result=await readUploadFile(input);
    setData(result);
    alert("Cargado con éxito");
  };
  const funcion=async()=>{
    const D=await getMembers("vhmdtZrZMovvkYkzhchn");
    setData(D);
  };
  const addMembers=()=>data.forEach(obj=>createMember("vhmdtZrZMovvkYkzhchn",obj));
  const addLine=()=>{
    if(nameIn!==null&&nameIn.length>0){
      const S=objectCreator(nameIn,cenaIn,tipoIn,cantidadIn);
      data.push(S);
      setC(!c);
    }
  };
  return <div>
    <div className='Container'>
      <div><p className='Headers'>Nombre</p></div>
      <div><p className='Headers'>Cena</p></div>
      <div><p className='Headers'>Bebida</p></div>
      <div><p className='Headers'>Cantidad</p></div>
    </div>
    {data.map((obj,key)=><div key={key} className="Container">
      <div><p>{obj.name}</p></div>
      <div><p>{obj.dinner?"si":"no"}</p></div>
      <div><p>{obj.type}</p></div>
      <div><p>{obj.quantity}</p></div>
    </div>)}
    <div className='Container'>
      <div style={{placeItems:"inherit",border:0}}>
        <input type="text" style={{textAlign:"center"}} onChange={e=>setNameIn(e.target.value)}/>
      </div>
      <div style={{placeItems:"inherit",border:0}}>
        <Select options={[{value:"Si",label:"Si"},{value:"No",label:"No"}]} onChange={e=>setCenaIn(e.value)} placeholder={<div>Type to search</div>} />
      </div>
      <div style={{placeItems:"inherit",border:0}}>
        <CreatableSelect isClearable options={[{value:"Ron",label:"Ron"},{value:"Ginebra",label:"Ginebra"},{value:"Vodka",label:"Vodka"},{value:"Whisky",label:"Whisky"},{value:"No",label:"No"}]} onChange={e=>setTipoIn(e.value)}/>
      </div>
      <div style={{placeItems:"inherit",border:0}}>
        <CreatableSelect isClearable options={[{value:"Mucho",label:"Mucho"},{value:"Medio",label:"Medio"},{value:"Poco",label: "Poco"},{value:"No",label:"No"}]} onChange={e=>setCantidadIn(e.value)}/>
      </div>
      <div style={{border:0}}>
        <input type="button" value="+" onClick={addLine}/>
      </div>
    </div>
    <form>
      <input
        type="file"
        onChange={(e)=>{read(e)}}
      />
    </form>
    <input type="button" value="Añadir Miembros" onClick={addMembers}/>
    <br />
    <input type="button" value="Recuperar Miembros" onClick={funcion}/>
    <br />
    <input type="number" placeholder='Numero de Noches' min={1} onChange={e=>setNights(e.target.value)}/>
    <br />
    <input type="button" value="Crear excel" onClick={()=>{exportFile(data,nights)}}/>
  </div>
};
export default App;