import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';
import { drinkCoffee, eatSnack, takeNap, study } from '../../actions/moodActions';

const Controls = ({ dispatch }) => (
  <section className={styles.Controls}>
    <button onClick={() => dispatch(drinkCoffee())}>Drink Coffee</button>
    <button onClick={() => dispatch(eatSnack())}>Eat Snack</button>
    <button onClick={() => dispatch(takeNap())}>Nap</button>
    <button onClick={() => dispatch(study())}>Study</button>
  </section>
);

Controls.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string
  })).isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default Controls;
