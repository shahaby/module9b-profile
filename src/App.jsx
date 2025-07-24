import React from "react";
import UserProfile from "./UserProfile";

const App = () => {
  const appStyle = {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "beige",
  };

  return (
    <div style={appStyle}>
      <h1>Profile Card</h1>
      <UserProfile />
    </div>
  );
};

export default App;
