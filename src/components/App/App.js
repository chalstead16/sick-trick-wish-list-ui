import React, { useState, useEffect } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';
import {fetchTricks, postTrick} from '../../apiCalls.js';


const App = () => {
 const [tricks, setTricks] = useState([]);

  const getTricks = () => {
    fetchTricks()
    .then(data => setTricks(data))
  }

  useEffect(() => getTricks(),[])

  const addTrick = (newTrick) => {
    postTrick(newTrick)
    .then((data) => setTricks([data, ...tricks]))
  }

// if I use .then I would to setState with the data from Post request
//OR I could use newTrick to setState without using data from Post

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick} />
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App;