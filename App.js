import './App.css';
import students from './components/students';
import data from './data';
import React, { useState } from 'react';

function App() {
  const [info, setInfo] = useState(data);
  
  return (
    <div className="App">
      {info.map((student)
      <h1>name{props.name}</h1>
      <h1>bio{props.bio}</h1>
      <h1>date{props.date}</h1>
      <h1>scores{props.scores}</h1>
    </div>
  );
}

export default App;
