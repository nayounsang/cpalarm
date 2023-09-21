import React from "react";
import { View } from "react-native";
import { contestTableType, contestType } from "../../type/contestType";
import EachContest from "../Molecule/EachContest";

interface proptype {
  data: contestTableType;
}

const ContestTable = ({ data }: proptype) => {
  return (
    <View>

      {Object.keys(data).map((e,i)=>(
        <EachContest title={e} initState={data[e].checked} key={i}/>
      ))}
    </View>
  );
};

export default ContestTable;
