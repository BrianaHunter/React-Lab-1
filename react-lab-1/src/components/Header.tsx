import "./Header.css";
import { useState } from "react";

interface HeaderProps {
  user?: string;
}

function Header({ user = `Welcome Chirpus` }: HeaderProps) {
  return (
    <div className="header-container">
      <h1 className="title">Ice Cream Wars</h1>
      {user}
    </div>
  );
}

export default Header;
