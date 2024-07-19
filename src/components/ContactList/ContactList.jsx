import { nanoid } from 'nanoid';
import { PhoneList, PhoneItem, DeleteButton } from './ContactList.styled';
const ContactList = ({ contacts, handleDeleteBtn }) => {
  return (
    <PhoneList>
      {contacts.map(el => (
        <PhoneItem key={nanoid()} contacts={contacts}>
          <p>{el.name}</p>
          <p>{el.number}</p>
          <DeleteButton
            type="button"
            key={nanoid()}
            onClick={() => handleDeleteBtn(el.id)}
          >
            Delete
          </DeleteButton>
        </PhoneItem>
      ))}
    </PhoneList>
  );
};
export default ContactList;
