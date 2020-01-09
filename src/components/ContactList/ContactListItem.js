/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './ContactListItem.module.css';

/*
 * COMONENT
 */
const ContactListItem = ({ contact, deleteContant }) => {
  const deleteItem = () => deleteContant(contact.id);

  return (
    <li key={contact.id} className={styles.item}>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: T.shape({
    id: T.string.isRequired,
    name: T.string,
    contact: T.string,
  }).isRequired,

  deleteContant: T.func.isRequired,
};

export default ContactListItem;
