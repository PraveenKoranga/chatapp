import Chat from "./component/Chat";
import Login from "./component/Login";
import Logout from "./component/Logout";
import "./style.css";
const App = () => {
  if (!localStorage.getItem("username")) return <Login />;
  return (
    <>
      <Chat />
      <Logout />
    </>
  );
};

export default App;
