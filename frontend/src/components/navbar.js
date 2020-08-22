import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/dist/navbar.css';

export default function NavBar() {
    return (
      <div className="navbar">
        <div className="hyperlinks">
          <Link to="">View Graphs </Link>
          <Link to="">Create Recordings </Link>
          <Link to="">View Recordings </Link>
        </div>
      </div>
    );
}