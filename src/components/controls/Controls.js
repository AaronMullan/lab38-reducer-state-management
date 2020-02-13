import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ actions }) => (
  <section className={styles.Controls}>
    {actions.map((obj, i) => {
      return <button key={i} onClick={obj.actionCreator}>{obj.name} - {obj.count}</button>;
    })}
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
