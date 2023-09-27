import React from "react";
import { View } from "react-native";
import { contestTableType, contestType } from "../../type/type";
import EachContest from "../Molecule/EachContest";

interface proptype {
  data: contestTableType;
  setData: React.Dispatch<React.SetStateAction<contestTableType>>;
}

const ContestTable = ({ data, setData }: proptype) => {
  return (
    <View>
      {Object.keys(data).map((e, i) => (
        <EachContest title={e} key={i} data={data} setData={setData} />
      ))}
    </View>
  );
};

export default ContestTable;
