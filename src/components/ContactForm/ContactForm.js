/* import - node_modules */
import React, { useState, useRef } from 'react';
import T from 'prop-types';
import shortid from 'shortid';

/*
 * COMONENT
 */
const ContactForm = ({ addContact }) => {
  /* NAME */
  const [name, setName] = useState('');
  const idNameRef = useRef(shortid.generate());

  const changeValueName = e => setName(e.target.value);

  /* NUMBER */
  const [number, setNumber] = useState('');
  const idNumberRef = useRef(shortid.generate());

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
        <label htmlFor={idNameRef.current}>
          <span>Name:</span>
          <input
            type="text"
            value={name}
            onChange={changeValueName}
            name="name"
            id={idNameRef.current}
          />
        </label>

        <label htmlFor={idNumberRef.current}>
          <span>Number:</span>
          <input
            type="number"
            value={number}
            onChange={changeValueNumber}
            name="number"
            id={idNumberRef.current}
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
