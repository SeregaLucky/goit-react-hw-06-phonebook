/* import - node_modules */
import React, { useState } from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './ContactForm.module.css';
/* import - HOOK */
import useGeneratesRandomStringRef from '../../servises/useGeneratesRandomStringRef';

/*
 * COMONENT
 */
const ContactForm = ({ addContact }) => {
  /* NAME */
  const [name, setName] = useState('');
  const idName = useGeneratesRandomStringRef();

  const changeValueName = e => setName(e.target.value);

  /* NUMBER */
  const [number, setNumber] = useState('');
  const idNumber = useGeneratesRandomStringRef();

  const changeValueNumber = e => setNumber(e.target.value);

  /* SUBMIT */
  const handleSubmit = e => {
    e.preventDefault();

    if (name === '' || number === '') return;

    addContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <>
      <p className={styles.textUpper}>Add contact:</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor={idName} className={styles.label}>
          <span className={styles.spanUppInp}>Name:</span>
          <input
            type="text"
            value={name}
            onChange={changeValueName}
            name="name"
            id={idName}
          />
        </label>

        <label htmlFor={idNumber} className={styles.label}>
          <span className={styles.spanUppInp}>Number:</span>
          <input
            type="number"
            value={number}
            onChange={changeValueNumber}
            name="number"
            id={idNumber}
          />
        </label>

        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  addContact: T.func.isRequired,
};

export default ContactForm;
