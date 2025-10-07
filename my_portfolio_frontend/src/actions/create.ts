/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";


export const create = async (data: FormData) => {
  data.append("authorId", "cmg7qsh5p0000tuwszoeo4sz8");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/create`, {
    method: "POST",
    body: data,
  });

  const result = await res.json();

  if (result.id) {
    revalidateTag("Blogs");
  }
  return result;
};

export default create;
