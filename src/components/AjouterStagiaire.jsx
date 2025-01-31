import React, { useState } from "react";

const Ajouterstagiaire = (props) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [Fil, setFil] = useState("");
  const [Ville, setVille] = useState("");
  const [photo, setPhoto] = useState("");

  const { stagiaires, setStagiaires } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const AjouterStag = () => {
    const newStagiaire = {
      nom: nom,
      prenom: prenom,
      Fil: Fil,
      Ville: Ville,
      photo: photo,
    };

    const newstag = [...stagiaires, newStagiaire];
    setStagiaires(newstag);

    // setStagiaires((prevState) => [...prevState, newStagiaire]);
  };

  return (
    <>
      <h1 className="text-center mt-5">Ajouter Stagiaire</h1>
      <form
        action=""
        className="row w-50 m-auto g-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          Nom:{" "}
          <input
            type="text"
            className="form-control"
            name="nom"
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div>
          Prénom:{" "}
          <input
            type="text"
            className="form-control"
            name="Prenom"
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div>
          Fillière:{" "}
          <input
            type="text"
            className="form-control"
            name="Fil"
            onChange={(e) => setFil(e.target.value)}
          />
        </div>
        <div>
          Ville:
          <select
            className="form-select"
            name="Ville"
            onChange={(e) => setVille(e.target.value)}
          >
            <option value="Fes">Fes</option>
            <option value="Rabat">Rabat</option>
            <option value="Sale">Sale</option>
            <option value="Tanger">Tanger</option>
            <option value="Casablanca">Casablanca</option>
            <option value="El-jadida">El-jadida</option>
          </select>
        </div>
        <div>
          Photo:{" "}
          <input
            type="file"
            className="form-control"
            name="photo"
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <button onClick={AjouterStag} className="btn btn-primary col-4">
          Ajouter stagiaire
        </button>
      </form>
    </>
  );
};

export default Ajouterstagiaire;
