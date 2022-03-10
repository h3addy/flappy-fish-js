import React from "react";
import GameDisplay from "./components/GameDisplay";

function App() {
  return (
    <div className="App" style={{height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <GameDisplay />
    </div>
  );
}

export default App;
