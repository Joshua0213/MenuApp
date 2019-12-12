import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col p-3 text-white bg-main-primary text-lg z-30">
      <div className="self-center z-50 relative">
        Copyright &copy; {new Date().getFullYear()} Menu Maker
      </div>
    </footer>
  );
}
