import { verify } from "jsonwebtoken";

const validateToken = (req, res, next) => {
  const accessToken = req.header("sessionToken");
  if (!accessToken)
    return res.json({ error: "Access token not available, please login" });

  try {
    const validToken = verify(accessToken, "Geheim");
    if (validToken) {
      return next();
    }
  } catch (error) {
    return {
      Error: error,
      Message: "sessionToken is invalid, please SingIn again!",
    };
  }
};

module.exports = { validateToken };
