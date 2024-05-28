import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Auth from './pages/Auth';
import Examinations from './pages/Examinations';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/classes" element={<Auth />} />
        <Route path="/examinations" element={<Examinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*">"404 Not Found"</Route>
      </Routes>
    </div>
  );
}

export default App;
