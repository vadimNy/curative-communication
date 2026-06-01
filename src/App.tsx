import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Join from './pages/Join';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<RouteWrapper><Services /></RouteWrapper>} />
            <Route path="/contact" element={<RouteWrapper><Contact /></RouteWrapper>} />
            <Route path="/join" element={<RouteWrapper><Join /></RouteWrapper>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Seamless page transition wrapper
function RouteWrapper({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="animate-fadeIn">{children}</div>;
}
