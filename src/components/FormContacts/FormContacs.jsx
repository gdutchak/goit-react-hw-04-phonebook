import PropTypes from 'prop-types';
import { useState } from 'react';
import { AddContacts } from 'components/AddContacts/AddContacts';
import { nanoid } from 'nanoid';

export function FormContacts({ submit, contacts }) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const addContactItem = (e) => {
        e.preventDefault();
        let data = {
            id: nanoid(),
            name,
            number,
        }
        if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
            alert(`${data.name} is already in contacts!`)

        } else {
            submit(data)
        }
        setName('')
        setNumber('')
    }

    return (
        <AddContacts submit={addContactItem} contactName={(e) => { setName(e.currentTarget.value) }} valueName={name} contactNumber={(e) => { setNumber(e.currentTarget.value) }} valueNum={number}></AddContacts>
    )
}



FormContacts.propTypes = {
    submit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
    })).isRequired,
}