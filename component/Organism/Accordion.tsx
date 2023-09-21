import React, { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ListItem } from "@rneui/themed";

interface proptype {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: proptype) => {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }
  return (
    <ListItem.Accordion
      content={
        <>
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "bold", fontSize: 20 }}>
              {title}
            </ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={toggleItem}
      bottomDivider
    >
      {children}
    </ListItem.Accordion>
  );
};

export default Accordion;
