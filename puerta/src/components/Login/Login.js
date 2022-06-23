import {Container,Modal,Sign} from './style';
import {Link,useNavigate} from 'react-router-dom';
import {AppContext} from '../../application/provider';
import {useContext,useState,useEffect} from 'react';
import {getItems} from '../../app/api';
export default ()=>{
    const [state,setState]=useContext(AppContext);
    const [user,setUser]=useState(null);
    const [password,setPassword]=useState(null);
    const [users,setUsers]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getItems().then(res=>setUsers(res));
    },[]);
    const fun=()=>{
        let array=[];
        if(user.includes("@"))array=users.filter(obj=>obj.email==user);
        else array=users.filter(obj=>obj.user==user);
        console.log(array);
        if(array.length==1){
            if(array[0].password==password)setState({name:array[0].name,id:array[0].id});
            else alert("No contrraseña");
        }
        else alert("no existe user");
    };
    return <Container>
        <Modal>
            <h2>Log In</h2>
            <input type="text" placeholder="Username or Email" onChange={e=>setUser(e.target.value)}/>
            <br/>
            <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
            <br/>
            <input type="checkbox"/>Remeber me
            <Link to="/aUser" className="login" onClick={()=>{fun()}}>Login</Link>
            <br/>
            <a href="#">Forgot your password?</a>
            <Sign>
                <p>Not a member?</p>
                <Link to="/signUp" className="signup">Sign Up</Link>
            </Sign>
        </Modal>
    </Container>
}