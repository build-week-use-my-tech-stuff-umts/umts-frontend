import React from "react";
import "./App.scss";

//Components
import ProfileHeader from "./components/render/ProfileHeader";
//Styles
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/render/NavBar";
import ItemCard from "./components/render/ItemCard";

function App() {
  return (
    <div className="App">
      <ProfileHeader />
      <NavBar />
      <ItemCard />
    </div>
  );
}

export default App;
