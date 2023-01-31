import "./App.css";
import {Routes, Route, BrowserRouter as Router } from "react-router-dom"

import Home from "./pages/Home";
import OldAppStart from "./pages/Old_App_Start"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OldHome" element={<OldAppStart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
