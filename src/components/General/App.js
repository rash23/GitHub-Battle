import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./Home";
import Popular from "../Popular/Popular";
import Error from "./Error";
import Battle from "../Battle/Battle";
import Nav from "./Nav";
import Results from "../Battle/Results";


const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/popular" element={<Popular/>}></Route>
                    <Route path="/battle" element={<Battle/>}></Route>
                    <Route path="/battle/results" element={<Results/>}></Route>
                    <Route path="*" element={<Error/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
