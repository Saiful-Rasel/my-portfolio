"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Project } from "@/type/type";
import CreateProjectForm from "../project/CreateProject";


function CreateProjectDialog() {
  const [open, setOpen] = useState(false);

  const emptyProject: Project = {
    id: "",
    title: "",
    description: "",
    thumbnail: "",
    liveLink: "",
    repoLink: "",
    features: [],
    createdAt: "",
    updatedAt: "",
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Create</Button>
        </DialogTrigger>

        <DialogContent>
          <CreateProjectForm
            data={emptyProject}
            onSuccess={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateProjectDialog;
