import React from "react";
import "./App.scss";

//Components
import ProfilePage from "./components/render/ProfilePage";

//Styles
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <ProfilePage />
    </div>
  );
}

export default App;
