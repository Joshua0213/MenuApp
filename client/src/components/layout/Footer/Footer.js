import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col p-1 text-white bg-teal-800 text-m">
      <div className="self-center">
        Copyright &copy; {new Date().getFullYear()} Menu Maker
      </div>
    </footer>
  );
}
