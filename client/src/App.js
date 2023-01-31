import "./App.css";
import {Routes, Route, BrowserRouter as Router } from "react-router-dom"

import Home from "./pages/Home";
import OldAppStart from "./pages/Old_App_Start"
import HelloToTheWorld from "./pages/HelloToTheWorld";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/OldHome" element={<OldAppStart />} exact />
          <Route path="/hello-world" element={<HelloToTheWorld/>} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
