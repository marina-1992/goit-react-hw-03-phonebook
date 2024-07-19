import { FilterInput, InputText } from './Filter.styled';
const Filter = ({ value, filterContact }) => {
  return (
    <>
      <InputText>Find contacts by name</InputText>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={filterContact}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </>
  );
};
export default Filter;
