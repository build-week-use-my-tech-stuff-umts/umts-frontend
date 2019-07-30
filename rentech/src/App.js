import React from "react";
import "./scss/App.scss";

//Components
import Header from "./components/render/Header.js";

//Styles
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      MASTER BRANCH
      <Header />
    </div>
  );
}

export default App;
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
