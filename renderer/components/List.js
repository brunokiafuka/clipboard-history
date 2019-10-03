import styled from 'styled-components'
import {ListItem} from '.'

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  flex-grow: 1;
  overflow: auto;
  /* for Firefox */
  min-height: 0;
`;

export const List = ({data}) => {
  return (
    <UL>
      {data.map(i => <ListItem item={i} />)}
    </UL>
  )
}
