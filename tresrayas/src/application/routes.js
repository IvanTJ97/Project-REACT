import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import VS from '../pages/VS';
import CPU from '../pages/CPU';
import Error from '../pages/Error';
export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/TicToe/" element={<Home/>}/>
            <Route path="/TicToe/vs/" element={<VS/>}/>
            <Route path="/TicToe/cpu/" element={<CPU/>} />
            <Route path="/TicToe/*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
);