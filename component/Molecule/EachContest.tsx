import React from "react";
import { StyleSheet } from "react-native";
import ContestTitle from "../Atom/ConstestTitle";
import { ListItem } from "@rneui/themed";
import { contestTableType } from "../../type/type";
import {
  getContestState,
  setContestState,
} from "../../function/contestStateFunc";

interface proptype {
  title: string;

  setData: React.Dispatch<React.SetStateAction<contestTableType>>;
  data: contestTableType;
}

const EachContest = ({ title, data, setData }: proptype) => {
  const toggleCheckBox = () => {
    setData(
      setContestState(
        data,
        title,
        "checked",
        !getContestState(data, title, "checked")
      )
    );
  };

  return (
    <ListItem bottomDivider>
      <ListItem.CheckBox
        onPress={toggleCheckBox}
        checked={getContestState(data, title, "checked")}
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
