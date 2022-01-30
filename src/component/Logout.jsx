const Logout = ({ creds, chat }) => {
  console.log(creds);
  console.log(chat);
  const logout = () => {
    localStorage.clear("username");
    window.location.reload();
  };
  return (
    <>
      <button
        onClick={() => logout()}
        style={{
          fontSize: "17px",
          fontWeight: "600",
          padding: "12px",
          border: "none",
          background: "none",
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
