import React from "react";
import "./scss/App.scss";

//Components
import Header from "./components/render/Header.js";
import Footer from './components/render/Footer.js'
//Styles
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/render/NavBar";
import AppRouter from "./components/render/AppRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <AppRouter />
        <Footer />
    </div>
  );
}

export default App;
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
