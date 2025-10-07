import CreateProjectDialg from "@/components/modules/dialog/createProjectDialog";
import { ProjectTable } from "@/components/modules/project/projectTable";





const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
    next: { tags: ["projects"] },
  });
  const data = await res.json();

  return (
    <div>
      <div className="flex items-center justify-between max-w-7xl mx-auto md:mb-[30px] text-2xl mb-6">
        <h1>All Project </h1>
        <h1><CreateProjectDialg></CreateProjectDialg></h1>
      </div>
     <ProjectTable projects={data.allProject}></ProjectTable>
    </div>
  );
};

export default page;
