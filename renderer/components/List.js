import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { ListItem, Order, Input as SearchInput, Section } from ".";

const UL = styled.ul`
  flex-grow: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  overflow: auto;
  min-height: 0;
`;

export const List = ({ data }) => {
  const [clips, setClips] = useState(data);

  useEffect(() => setClips(data), [data]);

  const onSearch = useCallback(
    value => {
      let currentClips = [];
      let newClips = [];
      if (value !== "") {
        currentClips = data;
        newClips = currentClips.filter(i => {
          const item = i.toLowerCase();
          const filter = value.toLowerCase();
          return item.includes(filter);
        });
      } else {
        newClips = data;
      }
      return setClips(newClips);
    },
    [data]
  );

  return (
    <>
      <SearchInput onSearch={onSearch} />
      <Section overflowY="scroll">
        <Order order={2}>
          <UL>
            {clips.map(i => (
              <ListItem key={i} item={i} />
            ))}
          </UL>
        </Order>
      </Section>
    </>
  );
};
