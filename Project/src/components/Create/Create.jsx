import {Test} from './Create.styles';
import {Link} from 'react-router-dom';
import {useState,useContext, useEffect} from 'react';
import {AppContext} from '../../application/provider';
import {createItem} from '../../services/plans';
import {getItems} from '../../services/users';
import useGeolocation from 'react-hook-geolocation';
const Create=()=>{
  const [state,setState]=useContext(AppContext);
  const [checkedUsersIds, setCheckedUsersIds] = useState([]);
  const [users,setUsers]=useState([]);
  const [name,setName]=useState("");
  const [des,setDes]=useState("");
  const [date,setDate]=useState(1);
  const geolocation=useGeolocation();
  useEffect(()=>{
    getItems().then(res=>setUsers(res));
  },[]);
  const onChange=obj=>{
    if(checkedUsersIds.includes(obj.id)){
      setCheckedUsersIds(checkedUsersIds.filter(id=>obj.id!=id))
    }
    else{
      setCheckedUsersIds([...checkedUsersIds, {name:obj.name,id:obj.id}]);
    };
  };
  return <Test>
    <h1>CREATE</h1>
    <form>
      <input type="text" name="name" id="name"  placeholder='Name' onChange={e=>setName(e.target.value)}/>
      <br />
      <select name="time" id="time" onClick={e=>setDate(e.target.value)}>
        <option value="1">1hr.</option>
        <option value="2">2hr.</option>
        <option value="3">3hr.</option>
        <option value="5">5hr.</option>
        <option value="NH">NH</option>
      </select>
      {users.filter(obj => obj.id !== state.id).map((obj, key) => <li key={key}><input type="checkbox" onChange={()=> onChange(obj)}/>{obj.name}</li>)}
      <br />
      <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Description' onChange={e=>setDes(e.target.value)}></textarea>
    </form>
    <button onClick={()=>{
      createItem({name:name,
                  date:date,
                  description:des,
                  creator:state.user,
                  invitados: checkedUsersIds,
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