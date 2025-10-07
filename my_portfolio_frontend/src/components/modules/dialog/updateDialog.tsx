import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {  MdEdit } from "react-icons/md";
import CreateBlogForm from "../BLog/Create-blog";
import { Blog } from "@/type/type";

function UpdateDialog({blog}:{blog:Blog}) {
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline"><MdEdit/></Button>
          </DialogTrigger>
          <DialogContent>
            <CreateBlogForm data={blog}/>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

export default UpdateDialog;
