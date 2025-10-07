"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import CreateBlogForm from "../BLog/Create-blog";
import { useState } from "react";


function CreateBlogDialog() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Create</Button>
          </DialogTrigger>
          <DialogContent>
            <CreateBlogForm  onSuccess={() => setOpen(false)} data={{
              id: "",
              authorId: "",
              title: "",
              content: "",
              description: null,
              image: "",
              slug: "",
              tags: [],
              published: false,
              createdAt: "",
              updatedAt: "",
              author: {
                id: "",
                name: ""
              }
            }}/>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

export default CreateBlogDialog;
