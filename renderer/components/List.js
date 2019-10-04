import styled from 'styled-components'
import {ListItem} from '.'

const UL = styled.ul`
  flex-grow: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  overflow: auto;
  min-height: 0;
`;

export const List = ({data}) => {
  return (
    <UL>
      {data.map(i => <ListItem item={i} />)}
    </UL>
  )
}
