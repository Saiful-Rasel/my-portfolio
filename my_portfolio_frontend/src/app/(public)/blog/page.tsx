
import BlogCard from "@/components/modules/BLog/BlogCard";
import { Blog } from "@/type/type";


const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`,{
    next: { tags: ["Blogs"] }, 
  });
  const data = await res.json();

  return (
    <div>
      <h1 className="text-center text-4xl my-8">All Post</h1>
      <div className="grid md:grid-cols-4 gap-8">
        {data.allBlog.blog.map((blog: Blog) => (
          <BlogCard key={blog.id} post={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default page;
