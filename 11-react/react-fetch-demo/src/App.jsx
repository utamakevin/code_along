import './App.css';
import { useEffect, useState } from 'react'
import Intro from './Intro';
import Stats from './Stats';
import MovieLove from './MovieLove';
import CurrentLocation from './CurrentLocation';

function App() {
  

  return (
    <div className="App">
      <CurrentLocation />
    </div>
  );
}

export default App;
