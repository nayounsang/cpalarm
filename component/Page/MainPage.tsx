import React, { useEffect, useState } from "react";
import { contestTableType, timeTableType } from "../../type/type";
import { adjustContest, adjustTime, initData } from "../../function/makeinfo";
import { Header } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import ShowContest from "../Template/ShowContest";
import { saveJSONFile } from "../../function/handlesJson";
import ShowTime from "../Template/ShowTime";

const MainPage = () => {
  const [boj, setBoj] = useState<contestTableType>({});
  const [time, setTime] = useState<timeTableType>({});

  useEffect(() => {
    adjustContest("백준")
      .then((result) => {
        setBoj(result);
        return result;
      })
      .then((result) => {
        console.log(result);
        saveJSONFile("백준", result);
      })
      .catch((error) => {
        console.error(error);
      });

    adjustTime()
      .then((result) => {
        setTime(result);
        return result;
      })
      .then((result) => {
        console.log(result);
        saveJSONFile("시간", result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header
        centerComponent={{
          text: "대회 화이팅",
          style: { color: "white", fontSize: 18, fontWeight: "bold" },
        }}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
        <ShowContest title="백준" data={boj} setData={setBoj} />
        <ShowTime title="시간" data={time} setData={setTime} />
      </ScrollView>
    </View>
  );
};

export default MainPage;
