import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactContainer, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: '1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: '2', name: 'Hermione Kline', number: '443-89-12' },
      { id: '3', name: 'Eden Clements', number: '645-17-79' },
      { id: '4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  // створюємо новий контакт та додаємо його до вже існуючих старих та записуємо в State
  createContact = dataForm => {
    const isAlreadyInContact = this.state.contacts.find(
      el => el.name === dataForm.name
    );
    if (isAlreadyInContact) {
      return alert(`${dataForm.name} is already in contacts.`);
    }
    const newContact = {
      ...dataForm,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  handleFilteredInput = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  contactsFilter = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };

  deleteBtn = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <ContactContainer>
        <Title>Phonebook</Title>
        <ContactForm createContact={this.createContact} />
        <Title>Contacts</Title>
        <Filter filterContact={this.contactsFilter} />
        <ContactList
          contacts={this.handleFilteredInput()}
          handleDeleteBtn={this.deleteBtn}
        />
      </ContactContainer>
    );
  }
}
