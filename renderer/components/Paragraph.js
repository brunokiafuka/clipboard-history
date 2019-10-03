import styled from 'styled-components'

export const Paragraph = styled.p`
  white-space: nowrap;
  margin: 5px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px;
  font-size: 15px;
  max-lines: 1;
  text-overflow: ellipsis;
  text-align: left;
  color: ${props => props.color || 'white'};
`;
