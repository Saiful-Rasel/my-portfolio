import ProjectCard from "@/components/modules/project/ProjectCard";
import { Project } from "@/type/type";


const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`,{
    cache:"no-store"
  });

  const data = await res.json();

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-4">
      {data.allProject.map((project: Project) => (
        <ProjectCard key={project.id} project={project}></ProjectCard>
      ))}
    </div>
  );
};

export default page;
