import "./App.css";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";

import Home from "./pages/Home";
import OldAppStart from "./pages/Old_App_Start";
import HelloToTheWorld from "./pages/HelloToTheWorld";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import CreatePlayer from "./pages/CreatePlayer";
import Player from "./pages/Player";
import CreateRanking from "./pages/CreateRanking";
import Ranking from "./pages/Ranking";

//learn masterlif up
import MasterLifter from "./pages/liftingStateUp/MasterLifter";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="top-menu">
          <Link to="/">Home </Link>
          <Link to="/createPost">New Post </Link>
          {/* <Link to="/Post">Post </Link> */}
          <Link to="/createPlayer">New Player </Link>
          <Link to="/createRanking">New Ranking</Link>

          {/* learn masterlif up */}
          <Link to="/masterlifter">Master Lifter</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/OldHome" element={<OldAppStart />} exact />
          <Route path="/hello-world" element={<HelloToTheWorld />} exact />
          <Route path="/createPost" element={<CreatePost />} exact />
          <Route path="/post/:id" element={<Post />} exact />
          <Route path="/createPlayer" element={<CreatePlayer />} exact />
          <Route path="/player/:id" element={<Player />} exact />
          <Route path="/createRanking" element={<CreateRanking />} exact />
          <Route path="/ranking/:id" element={<Ranking />} exact />

          {/* learn masterlif up */}
          <Route path="/masterlifter" element={<MasterLifter />} exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
