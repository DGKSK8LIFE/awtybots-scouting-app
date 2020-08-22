import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/dist/navbar.css';

export default function NavBar() {
    return (
      <div className="navbar">
        <Link to="" className="graph-hl">View Graphs </Link>
        <Link to="" className="create-hl">Create Recordings </Link>
        <Link to="" className="view-hl">View Recordings </Link>
      </div>
    );
}