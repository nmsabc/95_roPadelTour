import React, {useEffect, useState} from "react";
import axios from "axios";

function CountComments({ param1, param2, param3, param4 }) {
  const [comments, setComments]=useState([])
  if (!(param1 && param2 && param3 && param4)) {
    throw Error("Invalid parameters in function: foo.");
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3213/comments/byPostId/${param4}`)
      .then((response) => {
        setComments(response.data);
      });
  }, [param4]);
  console.log("x....")
  return comments.length;
}

export default CountComments;
