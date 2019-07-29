import React from "react";
import "./App.scss";

//Components
import ProfileHeader from "./components/render/ProfileHeader";
//Styles
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/render/NavBar";

function App() {
  return (
    <div className="App">
      <ProfileHeader />
      <NavBar />
    </div>
  );
}

export default App;
