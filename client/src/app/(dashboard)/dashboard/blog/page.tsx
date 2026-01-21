import { BlogTable } from "@/components/modules/BLog/BlogTable";
import CreateBlogDialog from "@/components/modules/dialog/CreateDialog";

const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
    next: { tags: ["Blogs"] },
    cache:"no-cache"
  });
  const data = await res.json();

  return (
    <div>
      <div className="flex items-center justify-between max-w-7xl mx-auto md:mb-[30px] text-2xl">
        <h1>All Post </h1>
        <h1>
          <CreateBlogDialog></CreateBlogDialog>
        </h1>
      </div>
      <BlogTable blogs={data.allBlog.blog}></BlogTable>
    </div>
  );
};

export default page;
