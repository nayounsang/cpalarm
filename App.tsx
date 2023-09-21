import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { testAdjustBoj } from "./function/makeinfo";
import { contestTableType, contestType } from "./type/contestType";
import ShowContest from "./component/Template/ShowContest";
import { Header } from "@rneui/themed";

export default function App() {
  const [boj, setBoj] = useState<contestTableType>({});

  useEffect(() => {
    const getBojInfoAPI = async () => {
      try {
        const result = await testAdjustBoj();
        console.log(result);
        setBoj(result);
      } catch (error) {
        console.log(error);
      }
    };
    getBojInfoAPI();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "대회 화이팅",
          style: { color: "white", fontSize: 18, fontWeight: "bold" },
        }}
      />
      <ShowContest title="백준" data={boj} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
