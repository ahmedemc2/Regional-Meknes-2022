import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListeStagiaire = (props) => {
  const { stagiaires, setStagiaires } = props;
  const navigate = useNavigate();

  const supprimerStag = (idStag) => {
    const newList = stagiaires.filter((stagiaire, index) => index !== idStag);
    setStagiaires(newList);
  };

  return (
    <>
      <h1 className="text-center mt-5">Liste des stagiaires</h1>
      <div className="row container justify-content-center m-auto gap-3">
        {stagiaires.map((stagiaire, index) => (
          <div key={index} className="col-xl-3 col-lg-4 col-md-6 border">
            <img
              className="w-50 d-block m-auto"
              src={stagiaire.photo}
              alt={stagiaire.nom}
            />
            <div className="ps-5">
              <p className="w-100">
                <b>Nom et prénom:</b> {stagiaire.nom + " " + stagiaire.prenom}
              </p>
              <p className="w-100">
                <b>Ville:</b> {stagiaire.Ville}
              </p>
              <p className="w-100">
                <b>Fillière:</b> {stagiaire.Fil}
              </p>
            </div>
            <div>
              <button
                onClick={() => supprimerStag(index)}
                className="btn btn-danger m-3"
              >
                Supprimer
              </button>
              <button
                className="btn btn-warning m-3"
                onClick={() => navigate(`/modifierStag/${stagiaire.nom}`)}
              >
                Modifier
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListeStagiaire;
