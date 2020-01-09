/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
// import styles from './ContactList.module.css';
/* import - COMONENT */
import ContactListItem from './ContactListItem';

/*
 * COMONENT
 */
const ContactList = ({ list, deleteContant }) =>
  list.length > 0 && (
    <ul>
      {list.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          deleteContant={deleteContant}
        />
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
