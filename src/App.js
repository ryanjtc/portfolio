import './App.css';
import Header from './components/Header/Header';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="App">
        <Header/>
        <NavBar/>
        <Routes>
            <Route path={'/'} element={ <Home/> }></Route>
            <Route path={'/projects'} element={ <Projects/> }></Route>


            <Route path={'*'} element={ <PageNotFound/> }></Route>
        </Routes>
    </div>
  );
}

export default App;
