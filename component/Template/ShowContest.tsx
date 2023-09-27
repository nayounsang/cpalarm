import React from "react";
import Accordion from "../Organism/Accordion";
import { contestTableType, contestType } from "../../type/type";
import ContestTable from "../Organism/ContestTable";
import { View } from "react-native";
import SaveUndo from "../Molecule/SaveUndo";
import { loadJSONFile, saveJSONFile } from "../../function/handlesJson";
import { bojJSONPath } from "../../const/path";

interface proptype {
  title: string;
  data: contestTableType;
  setData: React.Dispatch<React.SetStateAction<contestTableType>>;
}

const mypath:Object = {
  "백준": bojJSONPath,
};

const ShowContest = ({ title, data, setData }: proptype) => {
  const handlePressRedo = async () => {
    const origin = JSON.parse( await loadJSONFile(mypath[title], data)); 
    setData(origin);
  };

  const handlePressSave = () => {
    saveJSONFile(mypath[title as keyof Object], data);
  };

  return (
    <View>
      <Accordion title={title}>
        <ContestTable data={data} setData={setData} />
        <SaveUndo onPressRedo={handlePressRedo} onPressSave={handlePressSave} />
      </Accordion>
    </View>
  );
};

export default ShowContest;
