import styled from 'styled-components'

export const Container = styled.div`
  /* give the outermost container a predefined size */
  position: ${props => props.position || 'absolute'};
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  user-select: none;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI";
  font-weight: normal;
  color: white;
  font-size: 12px;
  margin: 0 auto;
  padding: 0;
  border: 0;
  text-align: left;
`;
