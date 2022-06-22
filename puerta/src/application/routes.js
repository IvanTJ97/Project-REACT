import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Home from '../pages/home';
import AUser from '../pages/aUser';
import SignUp from '../pages/signUp';
export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route exact path="/aUser" element={<AUser/>} />
        </Routes>
    </BrowserRouter>
);