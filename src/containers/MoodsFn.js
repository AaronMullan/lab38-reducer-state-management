import React, { useReducer, useState } from 'react';
import Controls from '../components/controls/Controls';
import reducer from '../reducers/moodReducer';
import Face from '../components/face/Face';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';
import { isTired, isHyper, isEducated, isHungry, getFace } from '../selectors/moodSelector';

const Moods = () => {

  const [moodstate, dispatch] = useReducer(reducer, { coffees: 0, snacks: 0, naps: 0, study: 0 });
  
  const face = getFace(moodstate);
  const actionsArray = [{ count: moodstate.coffees, name: 'Drink Coffee', actionCreator: () => dispatch(drinkCoffee()) }, { name: 'Eat Snack', count: moodstate.snacks, actionCreator: () => dispatch(eatSnack()) }, { name: 'Take Nap', count: moodstate.naps, actionCreator: () => dispatch(takeNap()) }, { name: 'Study', count: moodstate.study, actionCreator: () => dispatch(study()) }];
 
  return (
    <>
      <Controls actions={actionsArray}/>
      <Face emoji={face} />
    </>
  );
};

export default Moods;
