import React, { useEffect, useState } from "react";
import ListeStagiaire from "./ListeStagiaire";

const RechercheStagiaire = (props) => {
  const { stagiaires, setStagiaires } = props;

  const [filtered, setFiltered] = useState(stagiaires);

  const filterStagiaire = (e) => {
    const newListe = stagiaires.filter((stagiaire) =>
      stagiaire.nom.includes(e.target.value)
    );
    setFiltered(newListe);
  };

  return (
    <>
      <h1 className="text-center mt-5">Recherche Stagiaire</h1>
      <form action="" className="row w-50 m-auto g-3">
        <div>
          Nom:
          <input
            type="text"
            className="form-control"
            onChange={(e) => filterStagiaire(e)}
          />
        </div>
      </form>
      <ListeStagiaire stagiaires={filtered} setStagiaires={setStagiaires} />
    </>
  );
};

export default RechercheStagiaire;
