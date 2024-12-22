import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage1 from './pages/LandingPage1';
import LandingPage2 from './pages/LandingPage2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage1 />} />
        <Route path="/new" element={<LandingPage2 />} />
      </Routes>
    </Router>
  );
};

export default App;
