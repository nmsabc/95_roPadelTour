const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken)
    return res.json({ error: "Access token not available, please login" });

  try {
    const validToken = verify(accessToken, "Geheim");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (error) {
    return {
      Error: error,
      Message: "AccessToken is invalid, please SignIn!",
    };
  }
};

module.exports = { validateToken };
