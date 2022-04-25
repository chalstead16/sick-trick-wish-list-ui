import React, { useState } from 'react';

const Form = ({ addTrick }) => {
  const [stance, setStance] = useState('');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');

  const handleStance = event => {
    setStance(event.target.value);
  }
  
  const handleName = event => {
    setName(event.target.value);
  }

  const handleObstacle = event => {
    setObstacle(event.target.value);
  }

  const handleTutorial = event => {
    setTutorial(event.target.value);
  }

  const submitTrick = event => {
    event.preventDefault();
    const newTrick = {
      id: Date.now(),
      stance: stance,
      name: name,
      obstacle: obstacle,
      tutorial: tutorial
    }
    addTrick(newTrick);
    clearInputs();
  }

  const clearInputs = () => {
   setStance('');
   setName('');
   setObstacle('');
   setTutorial('');
  }

  return (
      <form>
          <select 
              className='stance-input'
              name='stance' 
              placeholder='Choose your Stance'
              onChange={event => handleStance(event)}>
              <option value=''>Choose your Stance</option>
              <option value="regular">Regular</option>
              <option value="switch">Switch</option>
          </select>
          <input
              className='name-input'
              type='text'
              placeholder='Name of Trick'
              name='name'
              value={name}
              onChange={event => handleName(event)}
          />
          <select 
              className='obstacle-input'
              name='obstacle'
              onChange={event =>handleObstacle(event)}>
              <option value=''>Choose your Obstacle</option>
              <option value="Flatground">Flatground</option>
              <option value="Ledge">Ledge</option>
              <option value="Rail">Rail</option>
              <option value="Stairs">Stairs</option>
              <option value="Pool">Pool</option> 
          </select>
          <input
              className='tutorial-input'
              type='text'
              placeholder='Tutorial'
              name='tutorial'
              value={tutorial}
              onChange={event => handleTutorial(event)}
          />

          <button 
            className='submit-button'
            onClick={event => submitTrick(event)}>Send it!</button>
      </form>
    )
}

export default Form;