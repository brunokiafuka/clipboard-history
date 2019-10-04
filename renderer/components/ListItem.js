import styled from "styled-components";
import { Element, Paragraph } from ".";

const LI = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
`;

export const ListItem = ({ item }) => {
  return (
    <LI
      key={item}
      onClick={() => global.ipcRenderer.send("copy-to-clipboard", item)}
    >
      <Element>
        <Paragraph>{item}</Paragraph>
      </Element>
    </LI>
  );
};
