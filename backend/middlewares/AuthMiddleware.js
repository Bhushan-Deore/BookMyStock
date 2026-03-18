const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || process.env.TOKEN_KEY;

const unauthorizedResponse = (res) =>
  res.status(401).json({
    success: false,
    redirect: true,
    message: "Unauthorized",
  });

module.exports.authenticateToken = (req, res, next) => {
  const bearerToken = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.slice(7)
    : null;
  const token = req.cookies?.token || bearerToken;

  if (!token || !JWT_SECRET) {
    return unauthorizedResponse(res);
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err || !decoded?.id) {
      return unauthorizedResponse(res);
    }

    req.userId = decoded.id;
    next();
  });
};

module.exports.userVerification = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return unauthorizedResponse(res);
    }

    return res.status(200).json({
      success: true,
      status: true,
      user: user.username,
    });
  } catch (error) {
    return unauthorizedResponse(res);
  }
};
