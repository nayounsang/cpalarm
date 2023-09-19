import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface proptype {
  title: string;
  expanded: boolean;
  toggleItem: () => void;
}

const AccordionTitle = ({ title, expanded, toggleItem }: proptype) => {
  return (
    <TouchableOpacity style={styles.container} onPress={toggleItem}>
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.textStyle}>{expanded ? "▲" : "▼"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AccordionTitle;
