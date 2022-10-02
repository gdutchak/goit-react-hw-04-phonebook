import { useState, useEffect } from "react";
import { FormContacts } from './FormContacts/FormContacs';
import { Filter } from "./Filter/Filter";
import { ListContacts } from "./ListContacts/ListContacts";
import { useLocalStorage } from "hooks/useLocalStorage";

const KEY_LOCALE_CONTACTS = 'date-contacts';

export function App() {
  const [contacts, setContacts] = useLocalStorage(KEY_LOCALE_CONTACTS, [])
  const [filter, setFilter] = useState('')

  const onSearchContact = () => {
    if (!filter) {
      return contacts;
    }
    const valueFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(valueFilter))
  }
  const deleteContacts = name => {
    setContacts(prev => prev.filter(contact => contact.name !== name))
  }
  const submitContacts = data => {
    setContacts(prev => [data, ...prev])
  }
  const visible = onSearchContact()
  return (
    <div style={{ padding: 40 }}>
      <h1>Phonebook</h1>
      <FormContacts submit={submitContacts} contacts={contacts}></FormContacts>
      <Filter search={(e) => { setFilter(e.currentTarget.value) }} filter={filter}></Filter>
      <h2>Contacts</h2>
      <ListContacts onDelete={deleteContacts} onSearch={visible}></ListContacts>
    </div >
  )
}








