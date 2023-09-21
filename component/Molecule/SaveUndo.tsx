import React from "react";
import { View } from "react-native";
import MyButton from "../Atom/MyButton";

interface proptype {
  onPressSave: () => void;
  onPressRedo: () => void;
}

const SaveUndo = ({ onPressSave, onPressRedo }: proptype) => {
  return (
    <View
      style={{
        width: "100%",
        marginTop: 30,
        paddingHorizontal: 15,
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      <MyButton
        title="저장하기"
        onPress={onPressSave}
        iconName="save"
        iconType="material"
      />
      <MyButton
        title="되돌리기"
        onPress={onPressRedo}
        iconName="undo"
        iconType="material"
      />
    </View>
  );
};

export default SaveUndo;
