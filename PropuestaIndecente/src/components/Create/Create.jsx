import {Test} from './Create.styles';
import {Link} from 'react-router-dom';
import {useState,useContext} from 'react';
import {AppContext} from '../../application/provider';
import {createItem} from '../../services/plans';
import useGeolocation from 'react-hook-geolocation';
const Create=()=>{
  const geolocation = useGeolocation();
  const [state,setState]=useContext(AppContext);
  const [name,setName]=useState("");
  const [material,setMaterial] = useState("");
  const [materials,setMaterials]=useState(["empty"]);
  const [des,setDes]=useState("");
  const [date,setDate]=useState("");
  const funcion=()=>{
    if(materials[0]==="empty")materials[0]=material;
    else materials.push(material);
    setMaterial("");
  };
  return <Test>
    <h1>CREATE</h1>
    <form>
      <input type="text" name="name" id="name"  placeholder='Name' onChange={e=>setName(e.target.value)}/>
      <br />
      <input type="text" name="material" id="material" placeholder='Material' onChange={
        e=>setMaterial({name:e.target.value,state:false})
      }/>
      <input type="button" value="+" onClick={()=>funcion()}/>
      <br />
      {materials.map((obj,key)=><p key={key}>{obj.name}</p>)}
      <input type="date" name="date" id="date" onChange={e=>setDate(e.target.value)}/>
      <br />
      <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Description' onChange={e=>setDes(e.target.value)}></textarea>
    </form>
    <button onClick={()=>{
      createItem({name,
                  materials,
                  date,
                  description:des,
                  users:[state.user],
                  creator:state.user,
                  geo:{
                    lat: geolocation.latitude,
                    long: geolocation.longitude,
                    time: geolocation.timestamp
                  } 
                });
      alert("Evento creado correctamente");
    }}><Link to="/plans/">Create</Link></button>
    <br />
    <Link to="/plans/">Atrás</Link>
  </Test>
};
export default Create;
/*geo:{
lat: geolocation.latitude,
long: geolocation.longitude,
locAc: geolocation.accuracy,
alt: geolocation.altitude,
altAc: geolocation.altitudeAccuracy,
head: geolocation.heading,
speed: geolocation.speed,
time: geolocation.timestamp} */