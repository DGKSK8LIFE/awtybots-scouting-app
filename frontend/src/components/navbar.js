import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
      <div className="bg-white rounded-lg p-6 text-purple-500">
          <Link to="">View Graphs </Link>
          <Link to="">Create Recordings </Link>
          <Link to="">View Recordings </Link>
      </div>
    );
}