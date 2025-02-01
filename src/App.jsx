// 1 - Commande création projet: npx create-react-app gestion-stagiaire

import Ajouterstagiaire from "./components/ajouterStagiaire";
import ListeStagiaire from "./components/ListeStagiaire";
import RechercheStagiaire from "./components/RechercheStagiaire";
import SupStagiaire from "./components/SupStagiaire";
import ModifierStag from "./components/modifierStagiaire";
import Navbar from "./components/Navbar";
import NoPage from "./components/NoPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DisplayEtud from "./components/AfficherEtud";

const App = () => {
  const [stagiaires, setStagiaires] = useState([
    {
      nom: "Brosetti",
      prenom: "Erwin",
      Ville: "Des Moines",
      Fil: "Programmer Analyst I",
      photo:
        "https://robohash.org/voluptaterecusandaequo.png?size=100x100&set=set1",
    },
    {
      nom: "Fermin",
      prenom: "Davita",
      Ville: "Hanyuan",
      Fil: "Community Outreach Specialist",
      photo: "https://robohash.org/etetvoluptatem.png?size=100x100&set=set1",
    },
    {
      nom: "Vallens",
      prenom: "Sheilah",
      Ville: "Purut",
      Fil: "Account Representative I",
      photo: "https://robohash.org/sintquiplaceat.png?size=100x100&set=set1",
    },
    {
      nom: "Rivers",
      prenom: "Martie",
      Ville: "Sabang",
      Fil: "Structural Engineer",
      photo:
        "https://robohash.org/occaecatiearumreiciendis.png?size=100x100&set=set1",
    },
    {
      nom: "Goodrum",
      prenom: "Mommy",
      Ville: "San Francisco",
      Fil: "Technical Writer",
      photo: "https://robohash.org/doloressuntquia.png?size=100x100&set=set1",
    },
    {
      nom: "Sydenham",
      prenom: "Daniele",
      Ville: "Wanasari Baleran",
      Fil: "Environmental Tech",
      photo: "https://robohash.org/quamodioautem.png?size=100x100&set=set1",
    },
    {
      nom: "Lummis",
      prenom: "Rosalinde",
      Ville: "Yosowilangun",
      Fil: "Staff Accountant II",
      photo: "https://robohash.org/etmagnamalias.png?size=100x100&set=set1",
    },
    {
      nom: "Leefe",
      prenom: "Casandra",
      Ville: "Karanggeneng",
      Fil: "Health Coach I",
      photo:
        "https://robohash.org/quioptioexercitationem.png?size=100x100&set=set1",
    },
    {
      nom: "Bleasdale",
      prenom: "Elset",
      Ville: "Luotang",
      Fil: "Financial Advisor",
      photo: "https://robohash.org/eoshiceveniet.png?size=100x100&set=set1",
    },
    {
      nom: "Gosney",
      prenom: "Dugald",
      Ville: "Capalonga",
      Fil: "Safety Technician III",
      photo: "https://robohash.org/ullamsuntquos.png?size=100x100&set=set1",
    },
    {
      nom: "Boulton",
      prenom: "Adrian",
      Ville: "Guaynabo",
      Fil: "Junior Executive",
      photo: "https://robohash.org/istemolestiaeut.png?size=100x100&set=set1",
    },
    {
      nom: "Gantzer",
      prenom: "Ulberto",
      Ville: "Dongke",
      Fil: "Payment Adjustment Coordinator",
      photo:
        "https://robohash.org/aliaspossimusitaque.png?size=100x100&set=set1",
    },
    {
      nom: "Slinger",
      prenom: "Appolonia",
      Ville: "Margahayu",
      Fil: "Analyst Programmer",
      photo: "https://robohash.org/quialaboreet.png?size=100x100&set=set1",
    },
    {
      nom: "Reely",
      prenom: "Tine",
      Ville: "Smolenskaya",
      Fil: "Senior Financial Analyst",
      photo: "https://robohash.org/delectusquiquod.png?size=100x100&set=set1",
    },
    {
      nom: "Tremolieres",
      prenom: "Doug",
      Ville: "Cibuah",
      Fil: "Health Coach II",
      photo:
        "https://robohash.org/voluptatesquamquos.png?size=100x100&set=set1",
    },
  ]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <DisplayEtud />
        <Routes>
          <Route
            path="/"
            element={
              <ListeStagiaire
                stagiaires={stagiaires}
                setStagiaires={setStagiaires}
              />
            }
          />
          <Route
            path="/ajouterStag"
            element={
              <Ajouterstagiaire
                stagiaires={stagiaires}
                setStagiaires={setStagiaires}
              />
            }
          />
          <Route
            path="/supprimerStag"
            element={
              <SupStagiaire
                stagiaires={stagiaires}
                setStagiaires={setStagiaires}
              />
            }
          />
          <Route
            path="/chercherStag"
            element={
              <RechercheStagiaire
                stagiaires={stagiaires}
                setStagiaires={setStagiaires}
              />
            }
          />
          <Route
            path="/modifierStag/:name"
            element={
              <ModifierStag
                stagiaires={stagiaires}
                setStagiaires={setStagiaires}
              />
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
