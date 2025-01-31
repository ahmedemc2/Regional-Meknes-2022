import React from "react";
import { NavLink } from "react-router-dom"; // Ensure you have react-router-dom installed

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-5">
      <span className="navbar-brand" href="#">
        Gestion Stagiaire
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse" // Updated for Bootstrap 5
        data-bs-target="#navbarNav" // Updated for Bootstrap 5
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" end>
              Liste des stagiaires
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ajouterStag">
              Ajouter Stagiaire
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/supprimerStag">
              Supprimer stagiaire
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/chercherStag">
              Rechercher stagiaire par Nom
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
