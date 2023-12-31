import React from "react";
import Accordion from "../Organism/Accordion";
import { timeTableType } from "../../type/type";
import { Alert, View } from "react-native";
import SaveUndo from "../Molecule/SaveUndo";
import { loadJSONFile, saveJSONFile } from "../../function/handlesJson";
import TimeTable from "../Organism/TimeTable";
import adjustNotification from "../../function/notificationFunc";

interface proptype {
  title: string;
  data: timeTableType;
  setData: React.Dispatch<React.SetStateAction<timeTableType>>;
}

const ShowTime = ({ title, data, setData }: proptype) => {
  const handlePressRedo = async () => {
    const origin = await loadJSONFile<timeTableType>(title, data);
    setData(origin);
    Alert.alert("되돌리기완료", "기기에 저장된 데이터를 불러왔습니다.", [
      { text: "닫기" },
    ]);
  };

  const handlePressSave = async () => {
    await saveJSONFile(title, data);
    await adjustNotification();
    Alert.alert("저장하기완료", "기기에 데이터를 저장했습니다.", [
      { text: "닫기" },
    ]);
  };

  return (
    <View>
      <Accordion title={title}>
        <TimeTable data={data} setData={setData} />
        <SaveUndo onPressRedo={handlePressRedo} onPressSave={handlePressSave} />
      </Accordion>
    </View>
  );
};

export default ShowTime;
