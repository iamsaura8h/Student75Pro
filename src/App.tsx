import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage1 from './pages/LandingPage1';
import LandingPage2 from './pages/LandingPage2';
import DSA from './pages/DSA';
import Roadmaps from './pages/Roadmaps';
import Development from './pages/Development';
import About from './pages/About';
import Author from './pages/Author';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/new" element={<LandingPage1 />} />
        <Route path="/" element={<LandingPage2 />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/development" element={<Development />} />
        <Route path="/about" element={<About />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </Router>
  );
};

export default App;
