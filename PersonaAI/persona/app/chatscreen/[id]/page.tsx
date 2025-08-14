"use client";
import React from "react";
import ChatUI from "./comp";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ChatUI userId={id} />;
}
