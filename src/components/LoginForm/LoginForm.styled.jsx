import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  gap: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
`;

export const Input = styled.input`
  outline: none;
  padding: 3px;
  width: 100px;
  border: 1px solid #a5a2a2;
  @media screen and (min-width: 451px) {
    width: 170px;
    padding: 5px;
  }
  @media screen and (min-width: 760px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  text-align: center;
  color: #fff;
  background-color: #a5a2a2;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 70px;
  padding: 5px;
  :hover,
  :focus {
    background-color: #918d8d;
  }
  @media screen and (min-width: 451px) {
    width: 80px;
  }
  @media screen and (min-width: 760px) {
    width: 100px;
    height: 40px;
    font-size: 16px;
  }
`;
