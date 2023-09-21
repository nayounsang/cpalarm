import React from "react";
import { Button, Icon } from "@rneui/themed";
import { View } from "react-native";

interface proptype {
  onPress: () => void;
  title: string;
  iconType: string;
  iconName: string;
}

const MyButton = ({ onPress, title, iconName, iconType }: proptype) => {
  return (
    <View style={{ marginHorizontal: 7.5 }}>
      <Button size="md" type="solid" onPress={onPress}>
        <Icon name={iconName} color="white" type={iconType} />
        {title}
      </Button>
    </View>
  );
};

export default MyButton;
