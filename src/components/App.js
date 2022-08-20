import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./Home";
import Popular from "./Popular";
import Error from "./Error";
import Battle from "./Battle";
import Nav from "./Nav";


const App = () => {
    return (
        <div className="container">
            <HashRouter basename={"/"}>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/popular" element={<Popular/>}></Route>
                    <Route path="/battle" element={<Battle/>}></Route>
                    <Route path="*" element={<Error/>}></Route>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
