import React, { useState } from "react";

const SupStagiaire = (props) => {
  const [name, setName] = useState("");
  const { stagiaires, setStagiaires } = props;
  const supprimerStg = (e) => {
    e.preventDefault();
    const newList = stagiaires.filter((stagiaire) => stagiaire.nom !== name);
    setStagiaires(newList);
  };
  return (
    <>
      <h1 className="text-center mt-5">Ajouter Stagiaire</h1>
      <form action="" className="row w-50 m-auto g-3">
        <div>
          Nom:
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button onClick={(e) => supprimerStg(e)} className="btn btn-danger">
          Supprimer Stagiaire
        </button>
      </form>
    </>
  );
};
export default SupStagiaire;

// 2ème Méthode On utilisant useRef

// import React, { useRef } from "react";

// const SupStagiaire = (props) => {
//   const nameRef = useRef(); // ------------------- 1
//   const { stagiaires, setStagiaires } = props;

//   const supprimerStg = (e) => {
//     e.preventDefault();
//     const nom = nameRef.current.value; // ------------------ 2
//     const newList = stagiaires.filter((stagiaire) => stagiaire.nom !== nom);
//     setStagiaires(newList);
//   };
//   return (
//     <>
//       <h1 className="text-center mt-5">Ajouter Stagiaire</h1>
//       <form action="" className="row w-50 m-auto g-3">
//         <div>
//           Nom:
//           <input type="text" className="form-control" ref={nameRef} />
//           {/*------------------ 3 */}
//         </div>
//         <button onClick={(e) => supprimerStg(e)} className="btn btn-danger">
//           Supprimer Stagiaire
//         </button>
//       </form>
//     </>
//   );
// };

// export default SupStagiaire;
