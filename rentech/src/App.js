import React from "react";
import "./scss/App.scss";
import { Route, Switch } from "react-router-dom";
import LoginCard from "./components/render/LoginCard";
//Components
import Header from "./components/render/Header.js";
import Footer from "./components/render/Footer.js";
//Styles
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/render/NavBar";
import AppRouter from "./components/render/AppRouter";
import CreateAcctCard from './components/render/CreateAcctCard'
function App() {
  return (
    <Switch>
    <Route path="/login" render={props => <LoginCard {...props} />} />
    <Route path='/createaccount' render={props => <CreateAcctCard {...props} /> } />
      <div className="App">
        <Header />
        <NavBar />
        <div className="router-container">
          <AppRouter />
        </div>
        <Footer />
      </div>
    </Switch>
  );
}

export default App;
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
