import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import VS from '../pages/VS';
import CPU from '../pages/CPU';
import Error from '../pages/Error';
export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/vs" element={<VS/>}/>
            <Route path="/cpu" element={<CPU/>} />
            <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
);