import React from 'react';
import './App.css';
import DraggableContextContainer from './components/DraggableContextContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <DraggableContextContainer />
    </div>
  );
}

export default App;
