import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "@rneui/themed";
import { timeTableType } from "../../type/type";
import { getTimeState, setTimeState } from "../../function/stateFunc";
import TimeTitle from "../Atom/TimeTitle";

interface proptype {
  title: string;

  setData: React.Dispatch<React.SetStateAction<timeTableType>>;
  data: timeTableType;
}

const EachTime = ({ title, data, setData }: proptype) => {
  const toggleCheckBox = () => {
    setData(
      setTimeState(
        data,
        title,
        "checked",
        !getTimeState(data, title, "checked")
      )
    );
  };


  return (
    <ListItem bottomDivider>
      <ListItem.CheckBox
        onPress={toggleCheckBox}
        checked={getTimeState(data, title, "checked")}
        iconType="material-community"
        checkedIcon="checkbox-outline"
        uncheckedIcon={"checkbox-blank-outline"}
      />
      <ListItem.Content>
        <TimeTitle title={data[title]["title"]} />
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({});

export default EachTime;
