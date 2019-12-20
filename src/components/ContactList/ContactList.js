/* import - node_modules */
import React from 'react';
import T from 'prop-types';

/*
 * COMONENT
 */
const ContactList = ({ list, deleteContant }) => (
  <ul>
    {list.map(contact => (
      <li key={contact.id}>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
        <button type="button" onClick={() => deleteContant(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  list: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string,
      contact: T.string,
    }),
  ).isRequired,

  deleteContant: T.func.isRequired,
};

export default ContactList;
