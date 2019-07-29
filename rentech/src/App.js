import React from "react";
import "./App.scss";

//Components
import Profile from "./components/render/Profile";

//Styles
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/render/NavBar";

function App() {
  return (
    <div className="App">
      <Profile />
      <NavBar />
    </div>
  );
}

export default App;
