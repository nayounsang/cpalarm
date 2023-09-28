import { contestTableType, contestType, timeTableType, timeType } from "../type/type";
import deepCopy from "./deepCopy";

const getContestState = (data:contestTableType, title:string, key:string) => {
  return data[title as keyof contestTableType][key as keyof contestType];
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

const setTimeState = (data:timeTableType,title:string,key:string,value:any) => {
  let result = deepCopy(data);
  result[title][key] = value;
  return result;
}

const getTimeState = (data:timeTableType,title:string,key:string) => {
  return data[title as keyof timeTableType][key as keyof timeType];
}

export { setContestState, getContestState,setTimeState,getTimeState };
