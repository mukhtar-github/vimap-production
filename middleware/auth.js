import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // TEST USER
    const testUser = payload.userId === "63a0d41e4047052c83233315";
    req.user = { userId: payload.userId, testUser };
    // TEST USER

    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
};

export default auth;
