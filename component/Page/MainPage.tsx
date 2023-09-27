import React, { useEffect, useState } from "react";
import { contestTableType } from "../../type/type";
import { adjustContest, initData } from "../../function/makeinfo";
import { Header } from "@rneui/themed";
import { View } from "react-native";
import ShowContest from "../Template/ShowContest";
import { ensureDirExists, loadJSONFile, saveJSONFile } from "../../function/handlesJson";
import * as FileSystem from "expo-file-system";
import { bojContestTitle } from "../../const/selector";
import { bojJSONPath } from "../../const/path";

const MainPage = () => {
  const [boj, setBoj] = useState<contestTableType>({});

  useEffect(() => {
    ensureDirExists()
      .then(() => {
        initData();
      })
      .then(() => {
        return adjustContest("백준");
      })
      .then((result) => {
        setBoj(result);
        return result;
      })
      .then((result)=>{
        console.log('save',result);
        saveJSONFile(bojJSONPath,result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Header
        centerComponent={{
          text: "대회 화이팅",
          style: { color: "white", fontSize: 18, fontWeight: "bold" },
        }}
      />
      <ShowContest title="백준" data={boj} setData={setBoj} />
    </View>
  );
};

export default MainPage;
