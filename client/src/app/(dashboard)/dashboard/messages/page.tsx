"use client";

import React, { useState, useEffect } from "react";
import { Message } from "@/type/type";
import { toast } from "sonner";
import { Mail, Clock, Reply, User, MessageSquare, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";

const MessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replyingId, setReplyingId] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`);
      const data = await response.json();
      if (data.success) {
        setMessages(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleReply = async (id: string) => {
    if (!replyText.trim()) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/${id}/reply`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reply: replyText }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Reply saved successfully!");
        setReplyText("");
        setReplyingId(null);
        fetchMessages();
      } else {
        toast.error(data.message || "Failed to save reply");
      }
    } catch (error) {
      console.error("Failed to reply:", error);
      toast.error("Something went wrong");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold dark:text-white text-black">Inbox</h1>
          <p className="text-neutral-500 mt-1">Manage your messages and inquiries</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20">
          <MessageSquare size={18} />
          <span className="font-semibold">{messages.length} Messages</span>
        </div>
      </div>

      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-neutral-800 rounded-3xl">
            <Mail className="mx-auto text-neutral-700 mb-4" size={48} />
            <p className="text-neutral-500">No messages found yet.</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`border rounded-3xl transition-all duration-300 ${
                expandedId === msg.id
                  ? "border-blue-500 bg-neutral-900/40"
                  : "border-neutral-800 bg-neutral-900/20 hover:border-neutral-700"
              }`}
            >
              <div
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => setExpandedId(expandedId === msg.id ? null : msg.id)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl ${msg.reply ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500"}`}>
                    {msg.reply ? <CheckCircle2 size={24} /> : <Mail size={24} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      {msg.name}
                      {msg.reply && (
                        <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-500 rounded-full uppercase tracking-wider">
                          Replied
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-neutral-500">
                      <span className="flex items-center gap-1">
                        <User size={12} /> {msg.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {format(new Date(msg.createdAt), "MMM d, yyyy • h:mm a")}
                      </span>
                    </div>
                  </div>
                </div>
                {expandedId === msg.id ? <ChevronUp size={20} className="text-neutral-500" /> : <ChevronDown size={20} className="text-neutral-500" />}
              </div>

              {expandedId === msg.id && (
                <div className="px-6 pb-6 pt-2 border-t border-neutral-800/50">
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-neutral-600 uppercase tracking-widest mb-2">Subject</h4>
                    <p className="text-white font-medium">{msg.subject || "(No Subject)"}</p>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-neutral-600 uppercase tracking-widest mb-2">Message</h4>
                    <p className="text-neutral-300 leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                  </div>

                  {msg.reply ? (
                    <div className="p-5 bg-green-500/5 border border-green-500/10 rounded-2xl">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs font-bold text-green-500/70 uppercase tracking-widest flex items-center gap-2">
                          <Reply size={12} /> Your Reply
                        </h4>
                        <span className="text-[10px] text-neutral-600">
                          {msg.repliedAt && format(new Date(msg.repliedAt), "MMM d, yyyy • h:mm a")}
                        </span>
                      </div>
                      <p className="text-neutral-300 text-sm leading-relaxed">{msg.reply}</p>
                    </div>
                  ) : replyingId === msg.id ? (
                    <div className="space-y-4">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type your reply here..."
                        className="w-full bg-neutral-800 border border-neutral-700 rounded-2xl p-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors h-32 resize-none"
                      />
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleReply(msg.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-all flex items-center gap-2"
                        >
                          <Send size={16} /> Save Reply
                        </button>
                        <button
                          onClick={() => setReplyingId(null)}
                          className="text-neutral-500 hover:text-white text-sm transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setReplyingId(msg.id)}
                      className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 font-bold transition-colors"
                    >
                      <Reply size={16} /> Reply to this message
                    </button>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const Send = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default MessagesPage;
