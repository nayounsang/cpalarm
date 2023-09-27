import { ListItem } from "@rneui/themed";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

interface proptype {
  title: string;
}

const ContestTitle = ({ title }: proptype) => {
  const [text, setText] = useState("");
  const cut = 33;

  useEffect(() => {
    if (title.length > cut) {
      setText(title.substring(0, cut) + "...");
    } else {
      setText(title);
    }
  }, []);

  return <ListItem.Title style={{fontSize:13.5}}>{text}</ListItem.Title>;
};

const styles = StyleSheet.create({});

export default ContestTitle;
