import styled from 'styled-components';
const PhoneList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  background-color: gray;
  list-style: none;

  margin: 10px auto;
`;
const PhoneItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DeleteButton = styled.button`
  padding: 5px;
  height: 35px;
  justify-content: center;
  border-radius: 3px;
  border: none;
`;
export { PhoneList, PhoneItem, DeleteButton };
