import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Navbar from "./components/navbar/Navbar";

import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import ScrollToTop from "./utils/scrollToTop.js";


function App() {
  return (
    
    <div className="App">
     
     <Router>

        <ScrollToTop/>
        <Navbar/>

        <Routes>

           <Route path="/" element={ <Home/> }/>
           <Route path="/projects" element={ <Projects/> }/>
           <Route path="/project/:id" element={ <Project/> }/>
           <Route path="/contacts" element={ <Contact/> }/>
           

        </Routes>

        <Footer/>

     </Router>


 
    </div>

  );
}

export default App;
