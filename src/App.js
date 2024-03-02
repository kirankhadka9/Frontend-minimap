import './App.css';
import { Navbar } from './components/Nav';
import About from './pages/About';
import Auth from './pages/Auth';
import SignUp from './pages/Auth/SignUp';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} >
              {/* Home is parent wrapper for other element , here all element will share home page content i.e header */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign-up" element={<SignUp />} />  
            </Route>
            {/* ............ */}
            </Routes>
            <Auth/>

      </header>
    </div>
  );
}

export default App;
