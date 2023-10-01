import React from "react";
import Accordion from "../Organism/Accordion";
import { contestTableType } from "../../type/type";
import ContestTable from "../Organism/ContestTable";
import { Alert, View } from "react-native";
import SaveUndo from "../Molecule/SaveUndo";
import { loadJSONFile, saveJSONFile } from "../../function/handlesJson";
import adjustNotification from "../../function/notificationFunc";
import Message from "../Atom/Message";

interface proptype {
  title: string;
  data: contestTableType;
  setData: React.Dispatch<React.SetStateAction<contestTableType>>;
}

const ShowContest = ({ title, data, setData }: proptype) => {
  const handlePressRedo = async () => {
    const origin = await loadJSONFile<contestTableType>(title, data);
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
        {data && Object.keys(data).length > 0 ? (
          <ContestTable data={data} setData={setData} />
        ) : (
          <Message text="진행 대회가 없습니다." />
        )}
        <SaveUndo onPressRedo={handlePressRedo} onPressSave={handlePressSave} />
      </Accordion>
    </View>
  );
};

export default ShowContest;
