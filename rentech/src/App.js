import React from "react";
import "./App.scss";

//Components
import ProfileHeader from "./components/render/ProfileHeader";
//Styles
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/render/NavBar";
import ItemCardList from "./components/render/ItemCardList";
import AccountInfo from "./components/render/AccountInfo";
import MyTechList from "./components/render/MyTech";

function App() {
  return (
    <div className="App">
      <ProfileHeader />
      <NavBar />
      <ItemCardList />
      <AccountInfo />
      <MyTechList />
    </div>
  );
}

export default App;
