"use client";
import { users as personas } from "../data/users";
import React, { useState } from "react";
import Features from "./components/feature";
import { useRouter } from "next/navigation";
import Vcard from "./components/VCard";

const PersonaAILanding = () => {
  const router = useRouter();
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  const handlePersonaSelect = (personaId: string) => {
    setSelectedPersona(personaId);
  };

  const handleStartChat = (personaId: string) => {
    router.push("/chatscreen/" + personaId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Persona AI
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Persona AI revolutionizes digital interaction by providing you with
            distinct AI companions, each with unique personalities, conversation
            styles, and expertise areas. Whether you need creative inspiration
            or strategic guidance, our AI personas adapt to your communication
            style and preferences.
          </p>
        </div>

        <Features />
      </div>

      {/* Persona Selection */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Companion
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the persona that resonates with you. Each one has been
            carefully designed with unique traits and conversation styles.
          </p>
        </div>

        <Vcard
          personas={personas}
          selectedPersona={selectedPersona}
          handlePersonaSelect={handlePersonaSelect}
          handleStartChat={handleStartChat}
        />

        {selectedPersona && (
          <div className="text-center animate-[fadeIn_0.5s_ease-out]">
            <button
              onClick={() => handleStartChat(selectedPersona)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-12 py-4 rounded-full text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:transform hover:scale-105 shadow-2xl shadow-purple-500/25"
            >
              Start Chatting with{" "}
              {personas.find((p) => p.id === selectedPersona)?.name}
              <svg
                className="w-5 h-5 ml-2 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Persona AI
          </h3>
          <p className="text-gray-400 mb-6">
            The future of AI conversation is here. Experience personalities that
            understand you.
          </p>
          <div className="flex justify-center gap-6 text-gray-400">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Support
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PersonaAILanding;
