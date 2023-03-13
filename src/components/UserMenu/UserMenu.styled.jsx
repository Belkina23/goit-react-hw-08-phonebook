import styled from '@emotion/styled';

export const UserDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserP = styled.p`
  color: #a5a2a2;
  font-size: 17px;
  font-weight: 600;
`;

export const ButtonLogaut = styled.button`
  width: 100px;
  height: 30px;
  padding-top: 2px;
  font-size: 17px;
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
