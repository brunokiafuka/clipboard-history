import styled from 'styled-components'
import {Element, Paragraph} from '.'

const Foot = styled.footer`
  flex-shrink: 1;
  border-top: 1px solid #909090;
  order: 2;
`;


export const Footer = () => {
  return (
    <Foot>
      <Element onClick={() => global.ipcRenderer.send('clear')}>
        <Paragraph>
          Clear
        </Paragraph>
      </Element>
      <Element onClick={() => global.ipcRenderer.send('quit')}>
        <Paragraph>
          Exit
        </Paragraph>
      </Element>
    </Foot>
  )
}
