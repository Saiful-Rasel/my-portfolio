import authOptions from "@/app/helpers/authOptions";
import { getServerSession } from "next-auth";

export const userSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
