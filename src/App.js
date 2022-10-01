import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NoteState from './contexts/notes/NotesState';
import Alert from './components/Alert';
function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert message="This is amazing react course."/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
