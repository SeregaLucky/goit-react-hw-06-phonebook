/* import - node_modules */
import React, { useState } from 'react';
import T from 'prop-types';
import useMakeIdRef from '../../servises/useMakeIdRef';

/*
 * COMONENT
 */
const ContactForm = ({ addContact }) => {
  /* NAME */
  const [name, setName] = useState('');
  const idName = useMakeIdRef();

  const changeValueName = e => setName(e.target.value);

  /* NUMBER */
  const [number, setNumber] = useState('');
  const idNumber = useMakeIdRef();

  const changeValueNumber = e => setNumber(e.target.value);

  /* SUBMIT */
  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <>
      <p>Add contact:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor={idName}>
          <span>Name:</span>
          <input
            type="text"
            value={name}
            onChange={changeValueName}
            name="name"
            id={idName}
          />
        </label>

        <label htmlFor={idNumber}>
          <span>Number:</span>
          <input
            type="number"
            value={number}
            onChange={changeValueNumber}
            name="number"
            id={idNumber}
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  addContact: T.func.isRequired,
};

export default ContactForm;
