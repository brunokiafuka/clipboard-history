import {Element, Paragraph} from '.'

export const Footer = () => {
  return (
    <>
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
    </>
  )
}
