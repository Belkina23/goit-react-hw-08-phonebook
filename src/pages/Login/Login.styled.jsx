import styled from '@emotion/styled';
import { FaReact } from 'react-icons/fa';

export const LogintDiv = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 40;
  padding: 40px 80px 100px 80px;
  color: #a5a2a2;
  background-color: white;
  width: 500px;
  height: 500px;
  margin: 30px auto;
  border: 2px dashed #a5a2a2;
  border-radius: 4%;
`;

export const StyledFaReact = styled(FaReact)`
  font-size: 10rem;
  animation: spin 10s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
