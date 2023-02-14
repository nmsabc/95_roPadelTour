import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pagenotfound">
      <h2>Page not found :(</h2>
      go <Link to="/"> Home </Link>
      or <Link to="signin"> SignIn </Link>
    </div>
  );
}

export default PageNotFound;
