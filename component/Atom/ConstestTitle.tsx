import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface proptype{
    title:string,
}

const ContestTitle = ({title}:proptype) => {
  

  return(
    <View>
        <Text>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default ContestTitle;
