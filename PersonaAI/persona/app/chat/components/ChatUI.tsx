"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { users } from "../../data/users";

const ChatUI = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = searchParams.get("id") || "1";
  const user = users.find((u) => u.id === userId) || users[0];

  const [messages, setMessages] = useState<Array<any>>([]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = input;

      setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
      setInput("");

      try {
        const typingId = Date.now();
        setMessages((prev) => [
          ...prev,
          {
            id: typingId,
            sender: "persona",
            text: "Typing...",
            isTyping: true,
          },
        ]);

        const res = await fetch("https://personaai-three.vercel.app/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage, personaId: userId }),
        });

        const data = await res.json();

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === typingId
              ? {
                  id: Date.now(),
                  sender: "persona",
                  text: data.reply || "Backend Problem Hai Talk to You Later",
                }
              : msg
          )
        );
      } catch (err) {
        console.error("Error calling chat API:", err);
      }
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
            <div className="text-sm text-[#b3b3b3]">{user.personStatus}</div>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span className="text-xs text-green-400 font-medium">Online</span>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto py-6 flex flex-col gap-4 scrollbar-hide p-4"
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
