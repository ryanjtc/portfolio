import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Links from "./components/LinksSection/Links";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Projects/>
            <Links/>
            <Footer/>
        </div>
    );
}

export default App;
