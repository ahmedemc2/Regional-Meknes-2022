import React, { useState } from "react";

const ListeStagiaire = (props) => {
  const { stagiaires, setStagiaires } = props;

  const supprimerStag = (idStag) => {
    const newList = stagiaires.filter((stagiaire, index) => index !== idStag);
    setStagiaires(newList);
  };

  return (
    <>
      <h1 className="text-center mt-5">Liste des stagiaires</h1>
      <div className="container g-5 row m-auto">
        {stagiaires.map((stagiaire, index) => (
          <div key={index} className="col-4 text-center">
            <img className="w-25" src={stagiaire.photo} alt={stagiaire.nom} />
            <p className="card-title">
              Nom et prénom: {stagiaire.nom + " " + stagiaire.prenom}
            </p>
            <p className="card-title">Ville: {stagiaire.Ville}</p>
            <p className="card-title">Fillière: {stagiaire.Fil}</p>
            <button
              onClick={() => supprimerStag(index)}
              className="btn btn-danger m-3"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListeStagiaire;
