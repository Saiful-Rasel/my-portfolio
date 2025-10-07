"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";
import { Project } from "@/type/type";

import UpdateProjectDialog from "./UpdateProjectDialog";
import { DeleteProjectDialog } from "./DeleteProjectDialog";

export function ProjectTable({ projects }: { projects: Project[] }) {
  return (
    <div className="md:max-w-7xl mx-auto ">
      <Table>
        <TableCaption>A list of your Projects.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Live Link</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              {/* Title */}
              <TableCell className="font-medium truncate w-[130px] md:w-[250px]">
                {project.title}
              </TableCell>

              {/* Live Link */}
              <TableCell>
                {project.liveLink ? (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <IoEyeSharp className="text-lg" />
                    <span>View</span>
                  </Link>
                ) : (
                  <span className="text-gray-400 italic">No link</span>
                )}
              </TableCell>

              {/* Edit */}
              <TableCell>
                <UpdateProjectDialog project={project} />
              </TableCell>

              {/* Delete */}
              <TableCell className="text-red-500 text-2xl">
                <DeleteProjectDialog project={project} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
