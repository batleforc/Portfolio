import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./component/MainPage";
function App() {
  return (
    <div className="App">
      <Route path="/" component={MainPage} />
    </div>
  );
}

export default App;
