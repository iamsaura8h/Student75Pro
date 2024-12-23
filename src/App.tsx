import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage1 from './pages/LandingPage1';
import LandingPage2 from './pages/LandingPage2';
import DSA from './pages/DSA';
import Roadmaps from './pages/Roadmaps';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/new" element={<LandingPage1 />} />
        <Route path="/" element={<LandingPage2 />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
      </Routes>
    </Router>
  );
};

export default App;
