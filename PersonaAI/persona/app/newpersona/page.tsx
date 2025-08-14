"use client";
import React, { useState } from "react";

const PersonaAILanding = () => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  const personas = [
    {
      id: "1",
      name: "Hitesh",
      title: "Creative Companion",
      description:
        "A passionate educator and developer, inspiring learners to grow in tech and achieve their goals.",
      personality: ["Creative", "Intuitive", "Inspiring", "Artistic"],
      avatar: "/hitesh.jpg",
      isOnline: true,
      personStatus: "My cohort my rules",
    },
    {
      id: "2",
      name: "Piyush",
      title: "Strategic Advisor",
      description:
        "A dedicated tech educator and entrepreneur, helping learners succeed in their career and build their future.",
      personality: ["Analytical", "Strategic", "Efficient", "Goal-oriented"],
      avatar: "/piyush.webp",
      isOnline: true,
      personStatus: "My cohort my rules",
    },
  ];

  const handlePersonaSelect = (personaId: string) => {
    setSelectedPersona(personaId);
    console.log(`Selected persona: ${personaId}`);
  };

  const handleStartChat = (personaId: string) => {
    console.log(`Starting chat with: ${personaId}`);
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      {/* <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Persona AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience conversations like never before with AI companions that
            understand, adapt, and grow with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Intelligent Responses
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              Personalized Experience
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              Always Learning
            </span>
          </div>
        </div>
      </div> */}

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Unique Personalities",
              description:
                "Each AI persona has distinct traits, preferences, and conversation styles that make interactions feel authentic and engaging.",
              icon: "🎭",
            },
            {
              title: "Adaptive Learning",
              description:
                "Our AI learns from your conversations to provide increasingly personalized and relevant responses over time.",
              icon: "🧠",
            },
            {
              title: "Specialized Expertise",
              description:
                "Different personas excel in various domains - from creative endeavors to analytical problem-solving.",
              icon: "⚡",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer hover:transform hover:scale-[1.02] ${
                selectedPersona === persona.id
                  ? "border-purple-400 shadow-2xl shadow-purple-400/20"
                  : "border-white/10 hover:border-purple-400/50"
              }`}
              onClick={() => handlePersonaSelect(persona.id)}
            >
              {selectedPersona === persona.id && (
                <div className="absolute top-4 right-4">
                  <div className="bg-purple-500 rounded-full p-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={persona.avatar}
                    alt={persona.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-400/20"
                  />
                  {persona.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {persona.name}
                  </h3>
                  <p className="text-purple-300">{persona.title}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {persona.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {persona.personality.map((trait, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    {trait}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                    selectedPersona === persona.id
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePersonaSelect(persona.id);
                  }}
                >
                  {selectedPersona === persona.id ? "Selected" : "Select"}
                </button>
                <button
                  className="flex-1 py-3 px-6 rounded-xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStartChat(persona.id);
                  }}
                >
                  Start Chat
                </button>
              </div>
            </div>
          ))}
        </div>

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
