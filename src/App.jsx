import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Placeholder Pages - Will be implemented in next steps
import Home from './pages/Home';
import Download from './pages/Download';
import Features from './pages/Features';
import Help from './pages/Help';
import Changelog from './pages/Changelog';
import About from './pages/About';
import Manual from './pages/Manual';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/features" element={<Features />} />
            <Route path="/help" element={<Help />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/about" element={<About />} />
            <Route path="/manual" element={<Manual />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
