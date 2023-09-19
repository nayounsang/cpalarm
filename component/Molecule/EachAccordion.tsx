import React, { ReactNode, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AccordionTitle from "../Atom/AccordionTitle";

interface proptype {
  title: string;
  children: ReactNode;
}

const EachAccordion = ({ title, children }: proptype) => {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }
  return (
    <View>
      <AccordionTitle
        title={title}
        expanded={expanded}
        toggleItem={toggleItem}
      />
      {expanded && children}
    </View>
  );
};

export default EachAccordion;
