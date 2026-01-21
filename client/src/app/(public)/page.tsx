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
  // --------------------------
  // Helper function to fetch safely
  // --------------------------
  async function safeFetch(url: string) {
    try {
      const res = await fetch(url, { next: { revalidate: 30 } });
      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(`Error fetching ${url}:`, err);
      return null; // fallback so build doesn't crash
    }
  }

  // --------------------------
  // Fetch blog and project data
  // --------------------------
  const blogData = await safeFetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
  const projectData = await safeFetch(`${process.env.NEXT_PUBLIC_API_URL}/project`);

  // --------------------------
  // Fallback empty arrays
  // --------------------------
  const blogs = blogData?.allBlog?.blog || [];
  const projects: Project[] = projectData?.allProject || [];

  return (
    <div className="w-full px-4">
      <div className="mt-8 md:mt-0">
        <Banner />

        <AboutMe />

        {/* Services Section */}
        <Services />

        {/* Qualification Section */}
        <Qualification />

        {/* Blog Section */}
        <div className="w-full">
          <BlogCarousel items={blogs} />
        </div>

        {/* Projects Section */}
        <div className="w-full mx-auto md:max-w-8xl py-24 md:py-2">
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl text-gray-300 font-bold">Featured Projects</h2>
              <p className="text-gray-600 mt-2">
                A few of my latest works combining creativity and technology.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 3).map((project: Project) => (
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
