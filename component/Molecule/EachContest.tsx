import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ContestTitle from "../Atom/ConstestTitle";
import CheckBox from "@react-native-community/checkbox";

interface proptype {
  title: string;
}

const EachContest = ({ title }: proptype) => {

  const [checked,setChecked] = useState(false);

  const toggleCheckBox = () => {
    // title에 맞는 constest상태 갱신예정
    setChecked(!checked);
  }

  return (
    <View>
      <CheckBox disabled={false} value={checked} onValueChange={toggleCheckBox} />
      <ContestTitle title={title} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EachContest;
