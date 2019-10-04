import styled from 'styled-components'

export const Container = styled.div`
  position: ${props => props.position || 'absolute'};
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI";
  font-weight: normal;
  color: white;
  font-size: 12px;
  margin: 0 auto;
  padding: 0;
  border: 0;
  text-align: left;
`;
