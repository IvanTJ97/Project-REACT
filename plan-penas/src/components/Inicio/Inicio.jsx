import {useState} from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import {createMember,getMembers} from '../../app/api';
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
  const getServerMembers=async()=>{
    const D=await getMembers("vhmdtZrZMovvkYkzhchn");
    setData(D);
  };
  const addMembers=()=>data.forEach(obj=>createMember("vhmdtZrZMovvkYkzhchn",obj));
  const eraseMember=input=>{
    data.splice(input,1);
    setC(!c);
  };
  const addLine=()=>{
    if(nameIn!==null&&nameIn.length>0){
      const S=objectCreator(nameIn,cenaIn,tipoIn,cantidadIn);
      data.push(S);
      setC(!c);
    }
  };
  return <div>
    <div className='grid grid-cols-5 text-center'>
      <div><p className='font-bold text-xl border border-black'>Nombre</p></div>
      <div><p className='font-bold text-xl border border-black'>Cena</p></div>
      <div><p className='font-bold text-xl border border-black'>Bebida</p></div>
      <div><p className='font-bold text-xl border border-black'>Cantidad</p></div>
    </div>
    {data.map((obj,key)=><div key={key} className="grid grid-cols-5 text-center">
      <div><p>{obj.name}</p></div>
      <div><p>{obj.dinner?"si":"no"}</p></div>
      <div><p>{obj.type}</p></div>
      <div><p>{obj.quantity}</p></div>
      <div className='text-left'><input type="button" value="X" onClick={()=>eraseMember(key)}/></div>
    </div>)}
    <div className='grid grid-cols-5'>
      <div className='grid place-items-center'>
        <input type="text" style={{textAlign:"center"}} onChange={e=>setNameIn(e.target.value)} placeholder="Nombre"/>
      </div>
      <div className=''>
        <Select options={[{value:"Si",label:"Si"},{value:"No",label:"No"}]} onChange={e=>setCenaIn(e.value)} placeholder={<div>Cena</div>}/>
      </div>
      <div className=''>
        <CreatableSelect isClearable options={[{value:"Ron",label:"Ron"},{value:"Ginebra",label:"Ginebra"},{value:"Vodka",label:"Vodka"},{value:"Whisky",label:"Whisky"},{value:"No",label:"No"}]} onChange={e=>setTipoIn(e.value)} placeholder={<div>Tipo Bebida</div>}/>
      </div>
      <div className=''>
        <CreatableSelect isClearable options={[{value:"Mucho",label:"Mucho"},{value:"Medio",label:"Medio"},{value:"Poco",label: "Poco"},{value:"No",label:"No"}]} onChange={e=>setCantidadIn(e.value)} placeholder={<div>Cantidad</div>}/>
      </div>
      <div style={{border:0}}>
        <input type="button" value="+" onClick={addLine}/>
      </div>
    </div>
    <form className='text-center mt-5'>
      <input
        type="file"
        onChange={(e)=>{read(e)}}
      />
      <br />
      <p className='mt-5'>Número de noches:</p>
      <input type="number" defaultValue={1} min={1} max={31} onChange={e=>setNights(e.target.value)} className="w-10"/>
      <br />
      <input type="button" value="Crear excel" onClick={()=>{exportFile(data,nights)}} className="bg-black text-white w-52 p-3 rounded-xl hover:cursor-pointer hover:bg-slate-500 mt-5"/>
      <br />
      <input type="button" value="Añadir Miembros" onClick={addMembers} className="bg-black text-white w-52 p-3 rounded-xl hover:cursor-pointer hover:bg-slate-500 mt-5"/>
      <br />
      <input type="button" value="Recuperar Miembros" onClick={getServerMembers} className="bg-black text-white w-52 p-3 rounded-xl hover:cursor-pointer hover:bg-slate-500 mt-5"/>
    </form>
  </div>
};
export default App;