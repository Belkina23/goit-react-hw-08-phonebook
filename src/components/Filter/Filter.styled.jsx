import styled from '@emotion/styled';

const SectionFilter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Label = styled.label`
  margin: 5px;
  width: 300px;
`;
const Input = styled.input`
  outline: none;
  padding: 5px;
  border: 1px solid #a5a2a2;
  margin-bottom: 20px;
`;

export { SectionFilter, Label, Input }