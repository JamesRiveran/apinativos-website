import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import BusinessHome from './pages/business/BusinessHome';
import BusinessAboutUs from './pages/business/BusinessAbout';
import BusinessProducts from './pages/business/BusinessProducts';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contacto" element={<Contact />} />

          <Route path="/empresas/:businessId" element={<BusinessHome />} />
          <Route path="/empresas/:businessId/quienes-somos" element={<BusinessAboutUs />} />
          <Route path="/empresas/:businessId/productos" element={<BusinessProducts />} />
          <Route path="/empresas/:businessId/contacto" element={<Contact />} />
        </Routes>
    </Router>
  );
};

export default App;
