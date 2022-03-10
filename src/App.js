import React from "react";
import GameDisplay from "./components/GameDisplay";
import NotAvailable from "./components/NotAvailable";

function App() {
  const { innerWidth } = window;
  if(innerWidth < 900)
    return <NotAvailable />

  return (
    <div className="App" style={{height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <GameDisplay />
    </div>
  );
}

export default App;
