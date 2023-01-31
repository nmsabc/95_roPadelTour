import "./App.css";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";

import Home from "./pages/Home";
import OldAppStart from "./pages/Old_App_Start";
import HelloToTheWorld from "./pages/HelloToTheWorld";
import CreatePost from "./pages/CreatePost";
import CreatePlayer from "./pages/CreatePlayer";
import CreateRanking from "./pages/CreateRanking";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="top-menu">
          <Link to="/">Home </Link>
          <Link to="/createPost">New Post </Link>
          <Link to="/createPlayer">New Player </Link>
          <Link to="/createRanking">New Ranking</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/OldHome" element={<OldAppStart />} exact />
          <Route path="/hello-world" element={<HelloToTheWorld />} exact />
          <Route path="/createPost" element={<CreatePost />} exact />
          <Route path="/createPlayer" element={<CreatePlayer />} exact />
          <Route path="/createRanking" element={<CreateRanking />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
