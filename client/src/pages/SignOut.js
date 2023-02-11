import React, { useContext, useEffect } from "react";
import { AuthContext } from "../helpers/AuthContext";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();
  const { authState, setAuthState } = useContext(AuthContext);

  useEffect(() => {
    localStorage.removeItem("sessionToken")
    setAuthState({
      username: "",
      id: 0,
      validUser: false,
    });
    navigate("/");
  });

  return <></>;
}

export default SignOut;
