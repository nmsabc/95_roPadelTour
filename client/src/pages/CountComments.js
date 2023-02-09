import React from "react";

function CountComments({ param1, param2, param3 }) {
  if (!(param1 && param2 && param3)) {
    throw Error("Invalid parameters in function: foo.");
  }
  const sum = param1 + param2 + param3;
  return sum;
}

export default CountComments;
