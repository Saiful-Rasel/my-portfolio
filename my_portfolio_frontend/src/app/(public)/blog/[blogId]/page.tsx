/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/BLog/BlogDetails";

const Page = async ({ params }:any) => {
  const { blogId  } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${blogId}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div>
      <BlogDetailsCard blog={data.singleBlog} />
    </div>
  );
};

export default Page;
