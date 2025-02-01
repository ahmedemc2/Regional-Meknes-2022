// 1 - npm i @reduxjs/toolkit react-redux

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dbEtudiant: [
    { id: "Etudiant 1", Nom: "ELOUAFI ANASS", Filière: "DD WEB FULL STACK" },
    { id: "Etudiant 2", Nom: "ETARAFI OUFAE", Filière: "DD OPTION MOBILE" },
    { id: "Etudiant 3", Nom: "ELSAIBIR HAMZA", Filière: "DD WEB DESIGNER" },
  ],
};
// 2 -
const sliceEtudiant = createSlice({
  name: "etudiants",
  initialState,

  // 3 -
  reducers: {
    ajouterStg: (state, action) => {
      state.dbEtudiant.push(action.payload);
    },
    supprimerStg: (state, action) => {
      state.dbEtudiant = state.dbEtudiant.filter(
        (etu) => etu.id !== action.payload
      );
    },
  },
});

export const { ajouterStg, supprimerStg } = sliceEtudiant.actions;

export default sliceEtudiant.reducer;
