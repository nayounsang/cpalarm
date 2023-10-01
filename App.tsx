import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainPage from "./component/Page/MainPage";
import { initNotification } from "./function/notificationFunc";

export default function App() {
  useEffect(() => {
    initNotification();
  }, []);

  return (
    <View style={styles.container}>
      <MainPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
