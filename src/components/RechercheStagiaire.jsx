import React, { useEffect, useState } from "react";
import ListeStagiaire from "./ListeStagiaire";

const RechercheStagiaire = (props) => {
  const { stagiaires, setStagiaires } = props;

  const [filtered, setFiltered] = useState([]);

  const filterStagiaire = (e) => {
    const str = e.target.value.toUpperCase();
    const newListe = stagiaires.filter((stagiaire) =>
      stagiaire.nom.toUpperCase().includes(str)
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
      {filtered.length > 0 && (
        <ListeStagiaire stagiaires={filtered} setStagiaires={setStagiaires} />
      )}
    </>
  );
};

export default RechercheStagiaire;
