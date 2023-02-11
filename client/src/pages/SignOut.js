import React, { useContext, useEffect } from "react";
import { AuthContext } from "../helpers/AuthContext";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();
  const { setAuthState } = useContext(AuthContext);

  useEffect(() => {
    localStorage.removeItem("sessionToken")
    setAuthState(false);
    navigate("/");
  });

  return <></>;
}

export default SignOut;
