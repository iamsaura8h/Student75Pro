import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DSA from './pages/DSA';
import Roadmaps from './pages/Roadmaps';
import Development from './pages/Development';
import About from './pages/About';
import Author from './pages/Author';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
