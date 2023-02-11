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
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import SignOut from "./pages/SignOut";
import LogoutIcon from '@mui/icons-material/Logout';
import axios from "axios";

//learn props propagation and state sharing in React
import MasterLifter from "./pages/stateSharing/MasterLifter";
import DoubleInputBoxes from "./pages/stateSharing/DoubleInputBoxes";
import FilterableList from "./pages/stateSharing/FilterableList";

// AuthContext for admin, users and menu
import { AuthContext } from "./helpers/AuthContext";
import { useEffect, useState } from "react";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3213/auth/validateuser", {
        headers: {
          accessToken: localStorage.getItem("sessionToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          console.log(response.data)
          setAuthState(true);
        }
      });
  }, []);

  let data_str_in_js =
    "https://www.freecodecamp.org/news/data-structures-in-javascript-with-examples/";
  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <div className="top-menu">
            <Link to="/">Home </Link>
            {/* logged in or not */}
            {authState ? (
              <>
                <Link to="/createPost">New Post </Link>
                {/* <Link to="/Post">Post </Link> */}
                <Link to="/createPlayer">New Player </Link>
                <Link to="/createRanking">New Ranking</Link>
                {/* learn props propagation and state sharing in React */}
                <Link to="/masterlifter">Master Lifter</Link>
                <Link to="/dubleinputs">2xInputs</Link>
                <Link to="/filterablelist">FilterableList</Link>
                <Link to={data_str_in_js}>data_str_in_js</Link>
                <Link to="/signout"><LogoutIcon /></Link>
              </>
            ) : (
              <>
                <Link to="/signin">SingIn</Link>
              </>
            )}
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
            <Route path="/masterlifter" element={<MasterLifter />} exact />
            <Route path="/dubleinputs" element={<DoubleInputBoxes />} exact />
            <Route path="/filterablelist" element={<FilterableList />} exact />

            {/* learn some more */}
            <Route
              path="/datastructuresinjs"
              element={<data_str_in_js />}
              exact
            />

            {/* material UI */}
            <Route path="/signin" element={<SignIn />} exact />
            <Route path="/signup" element={<SignUp />} exact />
            <Route path="/resetpassword" element={<ResetPassword />} exact />
            <Route path="/signout" element={<SignOut />} exact />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
