import { Component } from 'react';
import { InputContact, Form, ButtonForm } from './ContactForm.styled';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  // зчитуємо данні з input
  handleChangeContact = (e, key) => {
    const { value } = e.target;
    this.setState({ [key]: value });
    // console.log(handleChangeContact(e, key));
  };
  // при натисканні на кнопку :
  // 1)прибираємо перезавантаження браузера
  // 2)передаємо створені контакти
  // 3) записуємо до Стейт імя та номер телефону контакту

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.createContact(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmitForm}>
        Name:
        <InputContact
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={e => this.handleChangeContact(e, 'name')}
          required
        />
        Number:
        <InputContact
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={e => this.handleChangeContact(e, 'number')}
          required
        />
        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    );
  }
}
export default ContactForm;
