import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Create from "../pages/Create";
import NoPage from "../pages/NoPage";
const App=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Login/>}/>
                    <Route path="inicio" element={<Home/>}/>
                    <Route path="create" element={<Create/>}/>
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default App;