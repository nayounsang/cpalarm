import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ContestTitle from "../Atom/ConstestTitle";
import { CheckBox, ListItem } from "@rneui/themed";

interface proptype {
  title: string;
  initState: boolean;
}

const EachContest = ({ title, initState }: proptype) => {
  const [checked, setChecked] = useState(initState);

  const toggleCheckBox = () => {
    // title에 맞는 constest상태 갱신예정
    setChecked(!checked);
  };

  return (
    <ListItem bottomDivider>
      <ListItem.CheckBox
        onPress={toggleCheckBox}
        checked={checked}
        iconType="material-community"
        checkedIcon="checkbox-outline"
        uncheckedIcon={"checkbox-blank-outline"}
      />
      <ListItem.Content>
        <ContestTitle title={title} />
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({});

export default EachContest;
