import { ChatEngine } from "react-chat-engine";

const Chat = () => {
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="19908849-df08-4498-99a3-e3e77652cfe7"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
      />
    </>
  );
};

export default Chat;
