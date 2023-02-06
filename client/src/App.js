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

// Material UI - branch 8 from 3 - startup using MUi
import SignIn from "./pages/SigIn"; 

//learn props propagation and state sharing in React
import MasterLifter from "./pages/stateSharing/MasterLifter";
import DoubleInputBoxes from "./pages/stateSharing/DoubleInputBoxes";
import FilterableList from "./pages/stateSharing/FilterableList";

let data_str_in_js = "https://www.freecodecamp.org/news/data-structures-in-javascript-with-examples/"
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

          {/* learn props propagation and state sharing in React */}
          <Link to="/masterlifter">Master Lifter</Link>
          <Link to="/dubleinputs">2xInputs</Link>
          <Link to="/filterablelist">FilterableList</Link>
          <Link to={data_str_in_js}>data_str_in_js</Link>

          {/* material UI */}
          <Link to="/signin">SingIn</Link>
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

          {/* learn props propagation and state sharing in React */}
          <Route path="/masterlifter" element={<MasterLifter />} exact/>
          <Route path="/dubleinputs" element={<DoubleInputBoxes />} exact/>
          <Route path="/filterablelist" element={<FilterableList />} exact/>

          {/* learn some more */}
          <Route path="/datastructuresinjs" element={<data_str_in_js />} exact/>

          {/* material UI */}
          <Route path="/signin" element={<SignIn />} exact/>



        </Routes>
      </Router>
    </div>
  );
}

export default App;
