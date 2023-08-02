import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Home />
        <Projects />
        <Experience />
        <Contact />
        <About />
        {/* <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
