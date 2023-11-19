import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import NewPage from './NewPage';
import Home from './Home'; // Ensure this component exists

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpage" element={<NewPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
