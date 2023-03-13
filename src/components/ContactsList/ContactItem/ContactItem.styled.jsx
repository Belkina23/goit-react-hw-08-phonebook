import styled from '@emotion/styled';

const ContactItem = styled.li`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 60px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background-color: #a5a2a2;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #918d8d;
  }
`;

export { ContactItem, Button };
