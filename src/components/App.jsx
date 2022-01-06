import React from "react";
import Dict from "./Dict";
import emojipedia from "../emojipedia";

function Create(emojipedia) {
  return (
    <Dict
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Create)}</dl>
    </div>
  );
}

export default App;
