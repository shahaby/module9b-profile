import React from "react";

const UserProfile = () => {
  const name = "Jane Doe";
  const bio =
    "A passionate project manager with a resume full of awesome products.";

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "300px",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://plus.unsplash.com/premium_photo-1702552108421-57a57c4334a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile"
        style={imageStyle}
      />
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfile;
