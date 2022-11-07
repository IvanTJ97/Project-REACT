import {useEffect,useState} from "react";
import axios from 'axios';
const RandomUser=()=>{
    const [randomUser,setRandomUser]=useState(null);
    const [generator,setGenerator]=useState(false);
    useEffect(()=>{
        getRandomUser().then(res=>setRandomUser(res.data.results[0]));
    },[generator]);
    const getRandomUser=()=>axios("https://randomuser.me/api/");
    if(randomUser===null)return <h1>Esperando Informacion</h1>
    return <>
        <div>
            <img src={randomUser.picture.large} alt="Foto Perfil"/>
            <p>UserName: {randomUser.login.username} Password: {randomUser.login.password}</p>
            <p>Name: {randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}</p>
            <p>Gender: {randomUser.gender} Nat:{randomUser.nat}</p>
            <p>Age: {randomUser.dob.age} Birthday: {randomUser.dob.date.substring(0,10)}</p>
            <p>Email: {randomUser.email} Cell: {randomUser.cell} Phone: {randomUser.phone}</p>
            <p>Id: {randomUser.id.name} {randomUser.id.value}</p>
            <p>Street: {randomUser.location.street.number}{randomUser.location.street.name} PostCode: {randomUser.location.postcode}</p>
            <p>City: {randomUser.location.city}, {randomUser.location.state}, {randomUser.location.country}</p>
            <p>Longitude: {randomUser.location.coordinates.longitude} Latitude: {randomUser.location.coordinates.latitude}</p>
        </div>
        <button onClick={()=>setGenerator(!generator)}>Generate</button>
    </>
};
export default RandomUser;