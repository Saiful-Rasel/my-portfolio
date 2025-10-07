import BlogDetailsCard from "@/components/modules/BLog/BlogDetails";

const page = async ({ params }: { params: { blogId: string } }) => {
  const { blogId } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${blogId}`);
  const data = await res.json();

  return (
    <div>

      <BlogDetailsCard blog={data.singleBlog}></BlogDetailsCard>
    </div>
  );
};

export default page;
