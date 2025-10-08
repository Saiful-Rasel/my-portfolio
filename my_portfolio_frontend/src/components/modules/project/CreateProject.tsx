/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Project } from "@/type/type";
import { useEffect, useState } from "react";
import Image from "next/image";
import createProject from "@/actions/createProject";
import updateProject from "@/actions/updateProject";


const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
   thumbnail: z
    .any()
    .refine((files) => !files || files.length === 0 || files[0] instanceof File, {
      message: "Thumbnail must be a file",
    })
    .optional(),
  liveLink: z.string().url("Must be a valid URL").optional(),
  repoLink: z.string().url("Must be a valid URL").optional(),
  features: z.string().optional(), // comma-separated string
});

type ProjectFormData = z.infer<typeof projectSchema>;

export default function CreateProjectForm({
  onSuccess,
  data,
}: {
  onSuccess?: () => void;
  data: Project;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (data?.thumbnail) {
      setPreview(data.thumbnail);
    }
  }, [data]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: data?.title ?? "",
      description: data?.description ?? "",
      liveLink: data?.liveLink ?? "",
      repoLink: data?.repoLink ?? "",
      features: data?.features?.join(", ") ?? "",
    },
  });

  const onSubmit = async (formData: ProjectFormData) => {
    try {
      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("description", formData.description);

      if (formData.thumbnail && formData.thumbnail.length > 0) {
        payload.append("thumbnail", formData.thumbnail[0]);
      }

      payload.append("liveLink", formData.liveLink ?? "");
      payload.append("repoLink", formData.repoLink ?? "");
      payload.append("features", formData.features ?? "");

      const result = data.id
        ? await updateProject(payload, data.id)
        : await createProject(payload);

      if (result.success) {
        toast.success(
          data.id
            ? "Project updated successfully!"
            : "Project created successfully!"
        );
        router.refresh();
        reset();
        onSuccess?.();
      } else {
        toast.error("Failed to create project!");
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
        {data.id ? "Update Project" : "Create Project"}
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
          placeholder="Enter your project title"
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          {...register("description")}
          rows={4}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          placeholder="Write your project description..."
        />
        {errors.description && (
          <p className="text-sm text-red-500 mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Thumbnail */}
      <div>
        <div className="mt-2 w-[200px] mx-auto">
          {preview && (
            <Image
              src={preview}
              alt="Thumbnail Preview"
              width={200}
              height={200}
              className="rounded-md border object-cover"
            />
          )}
        </div>
        <label className="block text-sm font-medium mb-1" htmlFor="thumbnail">
          Thumbnail
        </label>
        <input
          type="file"
          id="thumbnail"
          accept="image/*"
          {...register("thumbnail")}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setPreview(URL.createObjectURL(file));
            }
          }}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
        {errors.thumbnail && (
          <p className="text-sm text-red-500 mt-1">
            {errors.thumbnail.message as string}
          </p>
        )}
      </div>

      {/* Live Link */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="liveLink">
          Live Link
        </label>
        <input
          type="url"
          id="liveLink"
          {...register("liveLink")}
          placeholder="https://yourprojectlive.com"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
        {errors.liveLink && (
          <p className="text-sm text-red-500 mt-1">{errors.liveLink.message}</p>
        )}
      </div>

      {/* Repo Link */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="repoLink">
          Repository Link
        </label>
        <input
          type="url"
          id="repoLink"
          {...register("repoLink")}
          placeholder="https://github.com/your-repo"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
        {errors.repoLink && (
          <p className="text-sm text-red-500 mt-1">{errors.repoLink.message}</p>
        )}
      </div>

      {/* Features */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="features">
          Features (comma separated)
        </label>
        <input
          type="text"
          id="features"
          {...register("features")}
          placeholder="Authentication, Dashboard, Payment Integration"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
        {errors.features && (
          <p className="text-sm text-red-500 mt-1">
            {errors.features.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting
          ? data.id
            ? "Updating..."
            : "Creating..."
          : data.id
          ? "Update Project"
          : "Create Project"}
      </button>
    </form>
  );
}
