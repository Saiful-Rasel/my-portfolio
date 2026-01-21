import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MdEdit } from "react-icons/md";

import { Project } from "@/type/type";
import CreateProjectForm from "./CreateProject";
import { useState } from "react";

function UpdateProjectDialog({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">
              <MdEdit />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <CreateProjectForm
              data={project}
              onSuccess={() => setOpen(false)} 
            />
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

export default UpdateProjectDialog;
