import Home from './routes/Home'
import './App.css'
import {Router, Routes, Route} from 'react-router-dom'
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Register from './routes/Register';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact"  element={<Contact />} />
    </Routes>
  )
}

export default App;
