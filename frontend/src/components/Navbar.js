import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          📚 Book Manager
        </Link>
        
        {user ? (
          <ul className="navbar-nav">
            <li>
              <Link to="/dashboard" className="nav-link">
                Tableau de bord
              </Link>
            </li>
            <li>
              <Link to="/books" className="nav-link">
                Mes livres
              </Link>
            </li>
            <li>
              <Link to="/books/new" className="nav-link">
                Ajouter un livre
              </Link>
            </li>
            <li>
              <span className="nav-link">
                Bonjour, {user.username}
              </span>
            </li>
            <li>
              <button onClick={onLogout} className="logout-btn">
                Déconnexion
              </button>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li>
              <Link to="/login" className="nav-link">
                Connexion
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link">
                Inscription
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;