import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF3399",
    "#33FF99",
    "#FFDD33",
    "#33FFFF",
    "#9933FF",
    "#FF6633",
    "#33FF33",
    "#FF33FF",
    "#FFFF33",
    "#33FFFF",
    "#FF9933",
    "#33FF99",
    "#FFFF99",
  ];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
