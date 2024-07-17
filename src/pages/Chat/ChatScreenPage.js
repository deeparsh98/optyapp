import React from "react";
import Header from "../../Header";
import ChatScreen from "./components/ChatScreen";

export default function ChatScreenPage() {
  return (
    <div>
      <Header backButton="/app/chat" />
      <ChatScreen />
    </div>
  );
}
