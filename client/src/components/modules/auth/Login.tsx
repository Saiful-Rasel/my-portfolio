"use client";

import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function LoginForm() {
  
  const form = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FieldValues) => {
    const res = await signIn("credentials", {
      ...values,
      callbackUrl: "/dashboard",
    });

    if (res?.error) {
      console.log("Login failed:", res.error);
    } else {
      toast.success("Login successful! Redirecting...");
      window.location.href = res?.url ??  "/dashboard";
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-black">
      <div className="space-y-6 w-full max-w-md  p-8 rounded-lg shadow-md border ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-md"
          >
            <h2 className="md:text-2xl text-[18px]  text-center">Only  Project Owner Can Login</h2>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-2 cursor-pointer ">
              Login
            </Button>

            <div className="flex items-center justify-center space-x-2">
              <div className="h-px w-16 bg-gray-300" />
              <div className="h-px w-16 bg-gray-300" />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
