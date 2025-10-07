/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

export const createProject = async (data: FormData) => {
  // If your API needs an authorId or userId, append it here
  // data.append("authorId", "cmg7qsh5p0000tuwszoeo4sz8");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/create`, {
    method: "POST",
    body: data,
  });

  const result = await res.json();

  if (result.id) {
    // Revalidate any cache tags for project listings
    revalidateTag("Projects");
  }

  return result;
};

export default createProject;
