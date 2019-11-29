import React from "react";
import "./CSSFooter.css";

export default function Footer() {
  return (
    <footer className="c-footer">
      <div className="c-footer__card">
        Copyright &copy; {new Date().getFullYear()} Menu Maker
      </div>
    </footer>
  );
}
