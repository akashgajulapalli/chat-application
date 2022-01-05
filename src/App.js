import "./App.css";
import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed/chatFeed";
import LoginForm from "./components/loginform";

const projectID = "74d1ebe5-3a7d-4c35-9861-a3daff5636cc";

const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm /> ;
  }

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}

export default App;
