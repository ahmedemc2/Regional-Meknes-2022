import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ModifierStag = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const { stagiaires, setStagiaires } = props;
  //   const stagiaire = stagiaires.filter(
  //     (stagiaire) => stagiaire.nom === params.name
  //   )[0];

  const stagiaire = stagiaires.find(
    (stagiaire) => stagiaire.nom === params.name
  );

  console.log(stagiaire);

  const [stgData, setStgData] = useState(stagiaire);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStgData({ ...stgData, [name]: value });
  };

  const updateBtn = (event) => {
    event.preventDefault();

    const index = stagiaires.findIndex(
      (stagiaire) => stagiaire.nom === params.name
    );

    const updatedStagiaires = [...stagiaires];

    updatedStagiaires[index] = stgData;

    setStagiaires(updatedStagiaires);

    navigate("/");
  };

  return (
    <>
      <h1 className="text-center mt-5">Modifier Stagiaire</h1>
      <form
        action=""
        className="row w-50 m-auto g-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          Nom:
          <input
            type="text"
            className="form-control"
            name="nom"
            defaultValue={stagiaire.nom}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          Prénom:
          <input
            type="text"
            className="form-control"
            name="prenom"
            defaultValue={stagiaire.prenom}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          Fillière:
          <input
            type="text"
            className="form-control"
            name="Fil"
            defaultValue={stagiaire.Fil}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          Ville:
          <select
            className="form-select"
            name="Ville"
            onChange={(e) => handleChange(e)}
          >
            <option value={stagiaire.Ville}>{stagiaire.Ville}</option>
            <option value="Fes">Fes</option>
            <option value="Rabat">Rabat</option>
            <option value="Sale">Sale</option>
            <option value="Tanger">Tanger</option>
            <option value="Casablanca">Casablanca</option>
            <option value="El-jadida">El-jadida</option>
          </select>
        </div>
        <div>
          Photo:
          <input
            type="file"
            className="form-control"
            name="photo"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          className="btn btn-warning col mx-3"
          onClick={(e) => updateBtn(e)}
        >
          Modifier stagiaire
        </button>
        <button className="btn btn-danger col">Annuler</button>
      </form>
    </>
  );
};

export default ModifierStag;
