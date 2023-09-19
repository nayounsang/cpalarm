import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import getBojInfo from "./function/getBojinfo";

export default function App() {
  
  useEffect(() => {
    const getBojInfoAPI = async () => {
      try {
        const result = await getBojInfo();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    getBojInfoAPI();
  }, []);

  return (
    <View style={styles.container}>
      <Text>kpp!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
