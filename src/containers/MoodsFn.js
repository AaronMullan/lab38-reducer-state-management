import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls'
import reducer from '../reducers/moodReducer';

const Moods = () => {

  const[moods, dispatch] = useReducer(reducer, []);

  return (
    <>
    <Controls />
    <h1>Hello From Moods.js</h1>
    </>
  );
};

export default Moods;