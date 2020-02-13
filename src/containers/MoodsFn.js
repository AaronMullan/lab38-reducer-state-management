import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import reducer from '../reducers/moodReducer';
import Face from '../components/face/Face';

const Moods = () => {

  const [moodstate, dispatch] = useReducer(reducer, { coffees: 0, snacks: 0, naps: 0, study: 0 });
 
  // const controlActions = 
  // const controlActions = actions.map(action => ({
  //   ...action,
  //   count: state[action.stateName]
  // }));
  return (
    <>
      <Controls dispatch={dispatch}/>
      <Face emoji= '😴' />
    </>
  );
};

export default Moods;
