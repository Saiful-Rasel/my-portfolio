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

import { Blog } from "@/type/type";
import Link from "next/link";
import UpdateDialog from "../dialog/updateDialog";
import { DeleteBlogDialog } from "./DeleteBLog";

export function BlogTable({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="md:max-w-7xl mx-auto ">
      <Table>
        <TableCaption>A list of your Blog.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((item) => (
            <TableRow key={item.title}>
              <TableCell>{item.slug}</TableCell>
              <TableCell>
                <Link href={`/blog/${item.id}`}>
                  <IoEyeSharp />
                </Link>
              </TableCell>

              <TableCell>
                <UpdateDialog blog={item} />
              </TableCell>
              <TableCell className="text-red-400 text-2xl">
                <DeleteBlogDialog blog={item}/>
              </TableCell>
              {/* <TableCell className="font-medium">{item.invoice}</TableCell> */}
              {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
