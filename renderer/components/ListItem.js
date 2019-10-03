import styled from 'styled-components'
import {Element, Paragraph} from '.'


const LI = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
`;

export const ListItem = ({item}) => {
  return (
    <LI onClick={() => global.ipcRenderer.send('copy-to-clipboard', 'fuckkkkkk')}>
      <Element>
        <Paragraph>{item}</Paragraph>
      </Element>
    </LI>
  )
}
