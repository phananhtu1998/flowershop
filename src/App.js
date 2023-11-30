import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebHeader from './page/Header';
import WebFooter from './page/Footer';
import Home from './page/Home';
import BoHoa from './page/Bohoa';

function AppFlower() {
  return (
    <Router>
      <div>
        <WebHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bohoa" element={<BoHoa />} />
          {/* Other routes */}
        </Routes>
        <WebFooter />
      </div>
    </Router>
  );
}

export default AppFlower;
