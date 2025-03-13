import React from "react";


const Header = ({ name }) => {
  return (
  <div className="p-5 bg-yellow-200 rounded shadow-md flex items-center justify-center">
      <h1 className="text-3xl font-medium">Welcome, {name || "Guest"}!</h1>
    </div>
  );
};

export default Header;
