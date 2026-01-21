
"use client";

import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/type/type";
// import { useSession } from "next-auth/react";


export default function BlogCard({ post }: { post: Blog }) {
  // const  {data:session,status}  = useSession()

  //   if (status === "loading") {
  //   return (
  //     <div className="h-64 w-full flex items-center justify-center text-gray-500">
  //       Loading...
  //     </div>
  //   );
  // }
  return (
    <div>
      <Link
        href={`/blog/${post.id}`}
        className="block group transform hover:-translate-y-1 transition-transform duration-300 "
      >
        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          {post.image ? (
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
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
              {post.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
              {post.content}
            </p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex justify-between items-center w-full">
                <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1">
                  {post.author.name}
                </span>

                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* {session && (
        <div className="flex gap-2 mt-2">
          <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
            Create
          </button>
          <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
            Update
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Delete
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            View
          </button>
        </div>
      )} */}
    </div>
  );
}
