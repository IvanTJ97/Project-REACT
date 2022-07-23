const style={
    width:"100%",
    paddingTop:"200px",
    display:"grid",
    placeItems:"center"
};
const boton={
    padding:"25px"
}
const Fase4=()=>{
    return <div style={style}>
        <button onClick={()=>{window.location.reload(false)}} style={boton}>¿Volver a jugar?</button>
    </div>
};
export default Fase4;