import { Fragment, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import {Container, Section, Divider, List, Order, Element, Paragraph, Footer} from '../components'


const App = () =>  {
  const [data, setData] = useState([]);

  const handleMessage = useCallback((event, message) => {
    console.log({message})
    if(!message) return;
    if(data.includes(message)) return;
    return setData(d => [ ...message])
  }, [])

  useEffect(() => {
    global.ipcRenderer.on('read-from-clipboard', handleMessage);
    return () => global.ipcRenderer.removeListener('read-from-clipboard', handleMessage);
  }, [handleMessage])

  if(data.length === 0) {
    return (
      <Container position="fixed">
        <Order order={1}>
          <Paragraph  color="#636363">No content to show ...</Paragraph>
        </Order>
        <Divider />
        <Order order={99}>
          <Element onClick={() => global.ipcRenderer.send('quit')}>
            <Paragraph>
              Exit
            </Paragraph>
          </Element>
        </Order>
      </Container>
    )
  }

  return (
    <Container>
      <Section>
        <List data={data} />
      </Section>
      <Footer />
    </Container>
  )
}

export default App;
