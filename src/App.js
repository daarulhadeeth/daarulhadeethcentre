import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Information from './pages/Information';
import Registration from './pages/Registration';
import Classes from './pages/Classes';
import Examinations from './pages/Examinations';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/examinations" element={<Examinations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
