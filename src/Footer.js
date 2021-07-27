import React from "react";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light fixed-bottom">
      <div className="container-sm text-center">
        &copy; {new Date().getFullYear()} StarWars
        <span className="text-muted fst-italic fs-7"> by Géza Tóth</span>
      </div>
    </footer>
  );
}
