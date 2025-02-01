import { configureStore } from "@reduxjs/toolkit";
import EtudiantReducer from "./sliceEtudiant";

const store = configureStore({ reducer: { etudiants: EtudiantReducer } });

export default store;
