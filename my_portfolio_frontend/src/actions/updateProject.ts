/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

// ✅ Update function
export const updateProject = async ( data: FormData,id: string) => {
  

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${id}`, {
    method: "PATCH", 
    body: data,
  });

  const result = await res.json();

  if (result.id) {
    revalidateTag("projects");
  }

  return result;
};

export default updateProject;
