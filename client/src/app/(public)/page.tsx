import Banner from "@/components/modules/Home/Banner";
import BlogCarousel from "@/components/modules/BLog/BLogCarousel";
import ProjectCard from "@/components/modules/project/ProjectCard";
import { Project } from "@/type/type";
import Link from "next/link";
import AboutMe from "@/components/modules/about/AboutMe";
import Qualification from "@/components/modules/qualification/Qualification";
import Services from "@/components/modules/Home/Services";
import Contact from "@/components/modules/contact/Contact";

export default async function Home() {
  const blogRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
    next: {
      revalidate: 30,
    },
  });
  const blogData = await blogRes.json();

  // this is project fetch
  const projectRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
    next: {
      revalidate: 30,
    },
  });
  const projectData = await projectRes.json();
  return (
    <div className="w-full px-4 ">
      <div className="mt-8 md:mt-0">
        <Banner></Banner>
        <div className="">
          <AboutMe></AboutMe>
        </div>

        {/* Services Section */}
        <Services />
        
        {/* Qualification Section */}
        <Qualification />

        {/* all blog  */}
        <div className="w-full ">
          <BlogCarousel items={blogData.allBlog.blog}></BlogCarousel>
        </div>

        {/* project overview */}
        <div className="w-full mx-auto md:max-w-8xl py-24 md:py-2">
          <section className="">
            <div className="text-center mb-8">
              <h2 className="text-3xl text-gray-300 font-bold  ">
                Featured Projects
              </h2>
              <p className="text-gray-600  mt-2">
                A few of my latest works combining creativity and technology.
              </p>
            </div>

            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData.allProject.slice(0, 3).map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/project"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
}
