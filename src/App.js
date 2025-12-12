import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';  // Add this import
import './App.css';

function App() {
  // Derive a safe basename: if PUBLIC_URL is a full URL, use its pathname; otherwise use it directly.
  let basename = process.env.PUBLIC_URL || '';
  try {
    if (basename && /^https?:\/\//i.test(basename)) {
      basename = new URL(basename).pathname.replace(/\/$/, '');
    }
  } catch (e) {
    // fallback to raw value
  }

  return (
    <Router basename={basename}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />  {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;