/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";


export const create = async (data: FormData) => {
  data.append("authorId", "cmggv33j20000tu8o1gr7o2fc");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/create`, {
    method: "POST",
    body: data,
  });
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  const result = await res.json();

  if (result.id) {
    revalidateTag("Blogs");
  }
  return result;
};

export default create;
