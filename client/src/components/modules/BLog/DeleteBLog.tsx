"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Blog } from "@/type/type"
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { MdDelete } from "react-icons/md";

export function DeleteBlogDialog({blog}:{blog:Blog}) {

    const [isPending, startTransition] = useTransition();
  const router = useRouter();
    const handleDelete = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${blog.id}`, {
        method: "DELETE",
      });


      if (!res.ok) {
        throw new Error("Failed to delete blog");
      }

  
      startTransition(() => {
        router.refresh();
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong while deleting!");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline"><MdDelete/></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        </AlertDialogHeader>
             <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isPending}
            className="bg-red-600 hover:bg-red-700"
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
