import { Fragment, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import {Container, Section, Divider, List, Element, Paragraph, Footer} from '../components'


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
    global.ipcRenderer.on('read-from-clipboard', handleMessage);
    return () => global.ipcRenderer.removeListener('read-from-clipboard', handleMessage);
  }, [handleMessage])

  if(data.length === 0) {
    return (
      <Container position="fixed">
        <Paragraph>No content to show ...</Paragraph>
      </Container>
    )
  }

  return (
    <Container>
      <Section>
        <List data={data} />
      </Section>
      <Divider />
      <Footer />
    </Container>
  )
}

export default App;
