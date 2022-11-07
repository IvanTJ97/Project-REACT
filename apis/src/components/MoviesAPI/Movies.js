import {useState} from "react";
import axios from 'axios';
const Movies=()=>{
    const [search,setSearch]=useState("");
    const [movie,setMovie]=useState({});
    const getMovies=input=>axios(`http://www.omdbapi.com/?t=${input}&apikey=cadd9ef8`).then(res=>setMovie(res.data));
    return <div style={{display:"flex",flexDirection:"row",gap:100}}>
        <div>
            <input type="text" onChange={e =>setSearch(e.target.value)} />
            <button onClick={()=>getMovies(search)}>Search</button>
        </div>
        <div>
            <img src={movie.Poster} alt="Foto" />
        </div>
        <div>
            <p>Name: {movie.Title}</p>
            <p>Year: {movie.Year}</p>
            <p>Rated: {movie.Rated}</p>
            <p>Released: {movie.Released}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Director: {movie.Director}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Awards: {movie.Awards}</p>
            <p>Box Office: {movie.BoxOffice}</p>
            <p>Plot: {movie.Plot}</p>
        </div> 
    </div>
};
export default Movies;