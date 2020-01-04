import React from "react";

export default function Footer() {
  return (
    <footer
      id="Footer_Container"
      style={{
        backgroundColor: "Dodgerblue"
      }}
      className="flex flex-col p-3 text-white bg-main-primary text-lg z-30"
    >
      <div id="Footer_Content" className="self-center z-50 relative">
        Copyright &copy; {new Date().getFullYear()} Menu Maker
      </div>
    </footer>
  );
}
