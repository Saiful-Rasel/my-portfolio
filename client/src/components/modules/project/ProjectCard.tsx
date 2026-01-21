import Link from "next/link";
import Image from "next/image";
import { Project } from "@/type/type";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="">
      <Link
        href={`/project/${project.id}`}
        className="block group transform hover:-translate-y-1 transition-transform duration-300"
      >
        <div className="bg-white  dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          {project.thumbnail ? (
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ) : (
            <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
              No Image
            </div>
          )}

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 h-[56px] group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
              {project.description}
            </p>
            {project.features && project.features.length > 0 && (
              <ul className="flex flex-wrap md:h-[60px] gap-2 mb-4">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="dark:bg-gray-900 dark:text-blue-200 text-blue-700 text-sm rounded-md"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-col items-center justify-between mb-4">
              <div className="flex gap-4 items-center w-full">
                Review:
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
                  {project.liveLink}
                </span>
              </div>
              <div className="flex gap-4 items-center w-full">
                Review:
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
                  {project.repoLink}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
