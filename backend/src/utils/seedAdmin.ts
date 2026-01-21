import { Role } from "@prisma/client";
import { envVar } from "../config";
import { prisma } from "../config/db";
import bcrypt from "bcrypt";

export const seedAdmin = async () => {
  try {
   
    const isAdminExist = await prisma.user.findUnique({
      where: { email: envVar.admin_email as string },
    });

    if (isAdminExist) {
      console.log("**admin already Exist ***");
      return
    }
    const hashPassword = await bcrypt.hash(envVar.admin_pass as string, 10);
    const data = {
      name: "saiful rasel",
      email: envVar.admin_email as string,
      role: Role.ADMIN,
      password: hashPassword,
      isVerified: true,
      auth: "credential",
    };

    const createAdmin = await prisma.user.create({ data });
    console.log(" Admin Created Successfuly!");
    console.log(createAdmin);
  } catch (error) {
    console.log(error)
  }
};
