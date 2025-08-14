"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { users } from "../../data/users";

const ChatUI = ({ userId }: { userId: string }) => {
  const router = useRouter();
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
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-400 to-pink-400">
      <div className="w-[70vw] h-[100vh] bg-white/20 backdrop-blur-lg flex flex-col rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center gap-4 pb-6 border-b border-white/30">
          <button
            onClick={() => router.push("/persona")}
            className="px-3 py-1 rounded-lg bg-white/20 text-gray-800 hover:bg-white/30 transition font-medium"
          >
            ← Back
          </button>
          <img
            src={user.avatar}
            alt={user.name}
            className="w-14 h-14 rounded-full border-2 border-pink-500 object-cover"
          />
          <div>
            <div className="text-xl font-bold text-gray-800">{user.name}</div>
            <div className="text-sm text-gray-700">{user.personStatus}</div>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <span className="text-xs text-green-700 font-medium">Online</span>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto py-6 flex flex-col gap-4 scrollbar-hide p-4"
        >
          <style jsx>{`
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            .typing-glow {
              background: linear-gradient(
                90deg,
                #7c3aed 25%,
                #a855f7 50%,
                #7c3aed 75%
              );
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
          `}</style>

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[70%] px-4 py-2 rounded-lg shadow-md ${
                msg.sender === "user"
                  ? "bg-pink-500 text-white self-end"
                  : msg.isTyping
                  ? "typing-glow text-white self-start"
                  : "bg-purple-600 text-white self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/30 flex items-center gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-lg bg-white/30 text-gray-800 placeholder-gray-600 focus:outline-none focus:bg-white/40"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="px-6 py-2 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition flex items-center justify-center gap-2"
            onClick={handleSend}
          >
            <Send size={18} />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
