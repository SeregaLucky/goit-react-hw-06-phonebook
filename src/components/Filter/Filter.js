/* import - node_modules */
import React from 'react';
import T from 'prop-types';

/*
 * COMONENT
 */
const Filter = ({ value, onChange }) => (
  <>
    <p>Filter by name:</p>
    <form>
      <input type="text" value={value} onChange={onChange} name="filter" />
    </form>
  </>
);

Filter.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
};

export default Filter;
