import React from "react";
import Accordion from "../Organism/Accordion";
import { contestTableType, contestType } from "../../type/contestType";
import ContestTable from "../Organism/ContestTable";
import { View } from "react-native";
import SaveUndo from "../Molecule/SaveUndo";

interface proptype {
  title: string;
  data: contestTableType;
}

const ShowContest = ({ title, data }: proptype) => {
  return (
    <View>
      <Accordion title={title}>
        <ContestTable data={data} />
        <SaveUndo onPressRedo={() => {}} onPressSave={() => {}} />
      </Accordion>
    </View>
  );
};

export default ShowContest;
