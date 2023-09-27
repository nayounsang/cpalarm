import { contestTableType } from "../type/type";
import deepCopy from "./deepCopy";

const getContestState = (data:contestTableType, title:string, key:string) => {
  return data[title][key];
};

const setContestState = (
  data: contestTableType,
  title: string,
  key: string,
  value: any
) => {
  let result = deepCopy(data);
  result[title][key] = value;
  return result;
};

export { setContestState, getContestState };
