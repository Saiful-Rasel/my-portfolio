import { envVar } from "../../config";
import { prisma } from "../../config/db";
import jwt from "jsonwebtoken";
import { LoginPayload } from "../../types/type";


const loginAdmin = async (payload: LoginPayload) => {
 
  const user = await prisma.user.findUnique({
    where: { email: payload.email },
    omit: { password: true },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const jwtPayload = {
    userId: user.id as string,
    email: user.email as string,
    role: user.role as string,
  };

  const accessToken = jwt.sign(jwtPayload, envVar.jwt_secret as string, {
    expiresIn: "1d",
  });

  return { accessToken, user };
  
};

export const authService = {
  loginAdmin
};
