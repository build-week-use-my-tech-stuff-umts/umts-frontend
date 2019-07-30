import React from "react";
import "./scss/App.scss";

//Components
import Header from "./components/render/Header.js";
import CreateAcctCard from "./components/render/CreateAcctCard.js";
import ItemCardList from "./components/render/ItemCardList.js";
//Styles
import "semantic-ui-css/semantic.min.css";
import { Item } from "semantic-ui-react";
import NavBar from "./components/render/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ItemCardList />
    </div>
  );
}

export default App;
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
