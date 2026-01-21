"use client";

import React from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, Tag } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" size={24} />,
      title: "Email",
      value: "saifulrasel737rf@gmail.com",
      link: "mailto:saifulrasel737rf@gmail.com",
    },
    {
      icon: <MessageSquare className="text-green-500" size={24} />,
      title: "WhatsApp",
      value: "+880 16246 16583",
      link: "https://wa.me/8801624616583",
    },
    {
      icon: <Phone className="text-blue-500" size={24} />,
      title: "Phone",
      value: "+880 16246 16583",
      link: "tel:+8801624616583",
    },
    {
      icon: <MapPin className="text-blue-500" size={24} />,
      title: "Location",
      value: "Dhaka, Bangladesh",
    },
  ];

  return (
    <section className="py-24 " id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-neutral-400">Have a project in mind? Let's talk.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 text-white dark:text-black border border-neutral-800 rounded-2xl hover:border-blue-500/30 transition-colors shadow-lg group"
              >
                <div className="p-3 bg-neutral-800 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <h3 className="dark:text-neutral-300  text-black font-medium mb-1">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-black dark:text-white hover:text-blue-500 transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-black dark:text-white">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className=" backdrop-blur-md border border-neutral-800 p-8 md:p-10 rounded-3xl shadow-2xl"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className=" text-sm font-medium ml-1 flex items-center gap-2">
                      <User size={14} /> Full Name
                    </label>
                    <input
                      {...register("name")}
                      placeholder="John Doe"
                      className={`w-full  border ${
                        errors.name ? "border-red-500" : "border-neutral-700"
                      } rounded-xl px-4 py-3 dark:text-white text-black focus:outline-none focus:border-blue-500 transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs ml-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className=" text-sm font-medium ml-1 flex items-center gap-2">
                      <AtSign size={14} /> Email Address
                    </label>
                    <input
                      {...register("email")}
                      placeholder="john@example.com"
                      className={`w-full border text-white dark:text-black ${
                        errors.email ? "border-red-500" : "border-neutral-700"
                      } rounded-xl px-4 py-3 dark:text-white text-white focus:outline-none focus:border-blue-500 transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className=" text-sm font-medium ml-1 flex items-center gap-2">
                    <Tag size={14} /> Subject
                  </label>
                  <input
                    {...register("subject")}
                    placeholder="Project Inquiry"
                    className={`w-full border ${
                      errors.subject ? "border-red-500" : "border-neutral-700"
                    } rounded-xl px-4 py-3 dark:text-white text-black  focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs ml-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className=" text-sm font-medium ml-1 flex items-center gap-2">
                    <MessageSquare size={14} /> Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`w-full  border ${
                      errors.message ? "border-red-500" : "border-neutral-700"
                    } rounded-xl px-4 py-3 dark:text-white text-black  focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs ml-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
