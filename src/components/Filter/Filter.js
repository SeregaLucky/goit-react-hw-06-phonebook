/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './Filter.module.css';

/*
 * COMONENT
 */
const Filter = ({ value, onChange }) => (
  <>
    <p className={styles.text}>Filter by name:</p>
    <form className={styles.form}>
      <input type="text" value={value} onChange={onChange} name="filter" />
    </form>
  </>
);

Filter.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
};

export default Filter;
