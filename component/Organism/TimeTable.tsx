import React from "react";
import { View } from "react-native";
import { timeTableType } from "../../type/type";
import EachTime from "../Molecule/EachTime";

interface proptype {
  data: timeTableType;
  setData: React.Dispatch<React.SetStateAction<timeTableType>>;
}

const TimeTable = ({ data, setData }: proptype) => {
  return (
    <View>
      {Object.keys(data)
        .sort((a, b) => Number(b)-Number(a))
        .map((e, i) => (
          <EachTime title={e} key={i} data={data} setData={setData} />
        ))}
    </View>
  );
};

export default TimeTable;
