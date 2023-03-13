import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  gap: 7px;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 300px;
  border: 1px solid #a5a2a2;
  border-radius: 6px;
`;

const Input = styled.input`
  outline: none;
  padding:5px;
`;

const Button = styled.button`
    width: 100px;
    height: 40px;
    font-size: 16px;
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
    
    `

    export { Form, Input, Button };