import styled from "styled-components";

const StyledInput = styled.input`
  height: 20px;
  min-height: 20px;
  font-size: 16px;
  padding: 6px;
  width: 89%;
  margin: 5px 15px;
  margin-top: 0.9em;
  flex-shrink: 1;
  background-color: #636363;
  color: white;
  border-radius: 3px;
  border: none;
  align-self: center;
  &:focus {
    outline: none;
  }
`;

export const Input = ({ onSearch }) => {
  return (
    <StyledInput
      type="text"
      onChange={e => onSearch(e.target.value)}
      placeholder="Search ..."
    />
  );
};
