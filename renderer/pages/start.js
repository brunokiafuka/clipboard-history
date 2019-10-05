import { Fragment, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
  Container,
  Section,
  Divider,
  List,
  Order,
  Element,
  Paragraph,
  Footer
} from "../components";

const App = () => {
  const [data, setData] = useState([]);

  const handleMessage = useCallback(
    (event, message) => {
      if (!message) return;
      if (data.includes(message)) return;
      return setData(d => [...message]);
    },
    [data]
  );

  useEffect(() => {
    global.ipcRenderer.on("read-from-clipboard", handleMessage);
    return () =>
      global.ipcRenderer.removeListener("read-from-clipboard", handleMessage);
  }, [handleMessage]);

  if (data.length === 0) {
    return (
      <Container position="fixed">
        <Order order={1}>
          <Paragraph color="#636363">No content to show ...</Paragraph>
        </Order>
        <Footer hasData={!data.length === 0} />
      </Container>
    );
  }

  return (
    <Container>
      <List data={data} />
      <Footer hasData={data.length !== 0} />
    </Container>
  );
};

export default App;
