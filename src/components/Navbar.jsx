import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar border">
      <h4 className="navbar-brand">Gestion Stagiaire</h4>
      <NavLink className="nav-link" to="/">
        liste Stagiaires
      </NavLink>

      <NavLink className="nav-link" to="/ajouterStag">
        liste Stagiaires
      </NavLink>

      <NavLink className="nav-link" to="/supprimerStag">
        Supprimer Stagiaires
      </NavLink>

      <NavLink className="nav-link" to="/chercherStag">
        Rechercher par Nom
      </NavLink>
    </nav>
  );
};

export default Navbar;
