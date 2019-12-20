/* import - node_modules */
import React, { useState, useReducer, useEffect } from 'react';
import shortid from 'shortid';
/* import - LocalStorage */
import { saveLocalStorage, getLocalStorage } from './servises/localStorage';
/* import - COMONENT */
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const ADD_ALL_CONTACTS = 'ADD_ALL_CONTACTS';
const ADD_CONTACT = 'ADD_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';

const contactsInitial = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_ALL_CONTACTS:
      return [...payload.allContacks];

    case ADD_CONTACT:
      return [...state, payload.contact];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

/*
 * COMONENT
 */
const App = () => {
  /* FILER */
  const [contacts, dispatch] = useReducer(contactsReducer, contactsInitial);

  useEffect(() => {
    const allContacks = getLocalStorage('contacts');
    if (!allContacks) return;

    dispatch({ type: ADD_ALL_CONTACTS, payload: { allContacks } });
  }, []);

  useEffect(() => saveLocalStorage('contacts', contacts), [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    dispatch({ type: ADD_CONTACT, payload: { contact } });
  };

  const deleteContant = id => {
    dispatch({ type: DELETE_CONTACT, payload: { id } });
  };

  /* FILER */
  const [filter, setFilter] = useState('');

  const changeValueFilter = e => setFilter(e.target.value);

  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeValueFilter} />
      <ContactList list={contactsFilter} deleteContant={deleteContant} />
    </>
  );
};

export default App;
