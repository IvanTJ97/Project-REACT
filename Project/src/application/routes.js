import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from '../pages/home';
import Plan from '../pages/plan';
import Plans from '../pages/plans';
import Create from '../pages/create';
import Error from '../pages/error';
export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/plans" element={<Plans/>} />
            <Route path="/plans/create" element={<Create/>}/>
            <Route path="/plans/*" element={<Plan/>} />
            <Route path="/*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
);