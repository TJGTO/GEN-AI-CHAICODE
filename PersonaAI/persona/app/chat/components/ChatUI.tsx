"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { users } from "../../data/users";

const ChatUI = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = searchParams.get("id") || "1";
  const user = users.find((u) => u.id === userId) || users[0];

  const [messages, setMessages] = useState([
    { sender: "persona", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#18181b]">
      <div className="w-[70vw] h-[100vh] bg-[#18181b] flex flex-col rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center gap-4 pb-6 border-b border-[#23232a]">
          <button
            onClick={() => router.push("/persona")}
            className="px-3 py-1 rounded-lg bg-[#23232a] text-[#fafafa] border border-[#2d2d34] hover:bg-[#2d2d34] transition"
          >
            ← Back
          </button>
          <img
            src={user.imageUrl}
            alt={user.name}
            className="w-14 h-14 rounded-full border-2 border-[#ff1744] object-cover"
          />
          <div>
            <div className="text-xl font-bold text-[#fafafa]">{user.name}</div>
            <div className="text-sm text-[#b3b3b3]">{user.description}</div>
          </div>
        </div>
        {/* Chat Section */}
        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto py-6 flex flex-col gap-4"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[70%] px-4 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-[#ff1744] text-white self-end"
                  : "bg-[#23232a] text-[#fafafa] self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="pt-6 border-t border-[#23232a] flex items-center gap-2 bg-[#18181b]">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-lg bg-[#23232a] text-[#fafafa] border border-[#2d2d34] focus:outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="px-6 py-2 rounded-lg bg-[#ff1744] text-white font-semibold hover:bg-[#ff4569] transition"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
