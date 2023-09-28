import { ListItem } from "@rneui/themed";
import React from "react";
import { StyleSheet } from "react-native";

interface proptype {
  title: string;
}

const TimeTitle = ({ title }: proptype) => {

  return <ListItem.Title style={{ fontSize: 13.5 }}>{title}</ListItem.Title>;
};

const styles = StyleSheet.create({});

export default TimeTitle;
