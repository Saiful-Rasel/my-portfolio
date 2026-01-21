


import authOptions from "@/app/helpers/authOptions";
import { getServerSession, Session } from "next-auth";

export default async function DashboardHome() {
  const session :Session | null = await getServerSession(authOptions);
  console.log(session,"from session")

  return (
    <div className=" flex flex-col justify-center items-center container md:mt-24 mt-20">
      <h1 className="text-4xl font-bold  mb-4">
        Welcome, {session?.user.name}
      </h1>
      <p className="text-lg  italic text-center">{session?.user?.email}</p>
    </div>
  );
}
