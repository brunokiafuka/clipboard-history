import {Element, Paragraph} from '.'

export const Footer = () => {
  return (
    <footer>
      <Element>
        <Paragraph>
          Clear
        </Paragraph>
      </Element>
      <Element onClick={() => global.ipcRenderer.send('quit')}>
        <Paragraph>
          Quit
        </Paragraph>
      </Element>
    </footer>
  )
}
