/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Blog } from "@/type/type";
import update from "@/actions/update";
import { useEffect, useState } from "react";
import Image from "next/image";
import create from "@/actions/create";
const isBrowser = typeof window !== "undefined";
const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
  image: isBrowser
    ? z.instanceof(FileList).optional() // browser only
    : z.any().optional(), // server-safe
  tags: z.string().optional(),
});

type BlogFormData = z.infer<typeof blogSchema>;

export default function CreateBlogForm({
  onSuccess,
  data,
}: {
  onSuccess?: () => void;
  data: Blog;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  useEffect(() => {
    if (data?.image) {
      setPreview(data.image);
    }
  }, [data]);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: data?.title ?? "",
      content: data?.content ?? "",
      tags: data?.tags?.join(", ") ?? "",
    },
  });

  const onSubmit = async (formData: BlogFormData) => {
    try {
      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("content", formData.content);

      if (formData.image && formData.image.length > 0) {
        payload.append("image", formData.image[0]);
      }

      payload.append("tags", formData.tags ?? "");

      const result = data
        ? await update(payload, data.id)
        : await create(payload);

        console.log("Backend response:", result);
        console.log('bacneknd url',process.env.NEXT_PUBLIC_API_URL)

      if (result.success) {
        toast.success(
          data ? "Blog updated successfully!" : "Blog created successfully!"
        );
        router.refresh();
        reset();
        onSuccess?.();
      } else {
        toast.error("Failed to create blog!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto p-6 shadow-md rounded-lg space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold mb-4">
        {data ? "Update Blog" : "Create Blog"}
      </h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title")}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          placeholder="Enter your blog title"
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          {...register("content")}
          rows={4}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          placeholder="Write your blog content here..."
        />
        {errors.content && (
          <p className="text-sm text-red-500 mt-1">{errors.content.message}</p>
        )}
      </div>

      {/* Image */}
      <div>
        <div className="mt-2 w-[200px] mx-auto ">
          {preview ? (
            <Image
              src={preview}
              alt="Blog Image Preview"
              width={200}
              height={200}
              className="rounded-md border object-cover"
            />
          ) : data?.image ? (
            <Image
              src={data.image}
              alt="Existing Blog Image"
              width={192}
              height={192}
              className="rounded-md border object-cover"
            />
          ) : null}
        </div>
        <label className="block text-sm font-medium mb-1" htmlFor="image">
          Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          {...register("image")}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setPreview(URL.createObjectURL(file)); // temporary preview
            }
          }}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
        <p className="text-sm text-red-500 mt-1">
          {errors.image ? "Invalid file" : null}
        </p>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="tags">
          Tags (comma separated)
        </label>
        <input
          type="text"
          id="tags"
          {...register("tags")}
          placeholder="Next.js, React, Web Development"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
        {errors.tags && (
          <p className="text-sm text-red-500 mt-1">{errors.tags.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
