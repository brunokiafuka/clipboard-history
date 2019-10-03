import { Fragment, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
// import {clipboard} from 'electron'

const Container = styled.div`
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

const Section = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  /* for Firefox */
  min-height: 0;
`;


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

const LI = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
`;

const Element = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  &:hover {
    background-color: #007AFF;
  }
`;
const PARAGRAPH = styled.p`
  white-space: nowrap;
  margin: 5px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
  max-lines: 1;
  text-overflow: ellipsis;
  text-align: left;
  color:white;
`;

const HR = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #909090;
  margin: 0.5em 0;
  padding: 0;
`;

const Footer = () => {
  return (
    <Fragment>
      <Element>
        <p>
          Clear
        </p>
      </Element>
      <Element>
        <p>
          Quit
        </p>
      </Element>
    </Fragment>
  )
}

const App = () =>  {
  const [data, setData] = useState([]);


  const handleMessage = useCallback((event, message) => {
    console.log({message})
    if(!message) return;
    if(data.includes(message)) return;
    return setData([ ...message])
  }, [])

  useEffect(() => {
    // start listening the channel message
    // global.ipcRenderer.send('message', 'fuckkkkkk')
    global.ipcRenderer.on('message', handleMessage);
    return () => global.ipcRenderer.removeListener('message', handleMessage);
  }, [handleMessage])

  if(data.length === 0) {
    return (
      <Container position="fixed">
        <PARAGRAPH>No content to show ...</PARAGRAPH>
      </Container>
    )
  }

  return (
    <Container>
      <Section>
        <UL className="scrollable-content content">
          {data.map(i =>
            (
              <LI onClick={() => global.ipcRenderer.send('copy-to-clipboard', 'fuckkkkkk')}>
                <Element>
                  <PARAGRAPH>{i}</PARAGRAPH>
                </Element>
              </LI>
            )
          )}
        </UL>
      </Section>
      <HR />
      <Element>
        <PARAGRAPH>
          Clear
        </PARAGRAPH>
      </Element>
      <Element onClick={() => global.ipcRenderer.send('quit')}>
        <PARAGRAPH>
          Quit
        </PARAGRAPH>
      </Element>
    </Container>
  )
}

export default App;
