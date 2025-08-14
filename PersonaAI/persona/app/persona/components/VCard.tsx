"use client";
import React from "react";

const VCard = ({
  personas,
  selectedPersona,
  handlePersonaSelect,
  handleStartChat,
}: {
  personas: any;
  selectedPersona: any;
  handlePersonaSelect: (personaId: string) => void;
  handleStartChat: (personaId: string) => void;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {personas.map((persona: any) => (
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
              <h3 className="text-2xl font-bold text-white">{persona.name}</h3>
              <p className="text-purple-300">{persona.title}</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            {persona.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {persona.personality.map((trait: any, index: number) => (
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
  );
};

export default VCard;
