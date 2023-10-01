import {
  contestTableType,
  contestType,
  timeTableType,
  timeTitle,
  timeType,
} from "../type/type";
import getBojInfo from "./getBojinfo";
import { loadJSONFile, saveJSONFile } from "./handlesJson";

const adjustContest = async (oj: string): Promise<contestTableType> => {
  let result: contestTableType = {};
  let prev: contestTableType = {};
  if (oj === "백준") {
    result = await getBojInfo();
    prev = await loadJSONFile<contestTableType>(oj, {});
  } else if (oj === "코드포스") {
    result = {};
    prev = {};
  } else {
    result = {};
    prev = {};
  }
  for (const key in result) {
    if (prev.hasOwnProperty(key)) {
      result[key as keyof contestTableType] = {
        ...prev[key as keyof contestTableType],
      };
    }
  }
  return result;
};

const getOriginTime = (): timeTableType => {
  const result: timeTableType = {};
  for (const key of Object.keys(timeTitle)) {
    result[key as keyof timeTableType] = {
      title: timeTitle[key],
      checked: false,
    };
  }
  return result;
};

const initData = async () => {
  await saveJSONFile("백준", {});
  await saveJSONFile("시간", getOriginTime());
};

const adjustTime = async (): Promise<timeTableType> => {
  return await loadJSONFile<timeTableType>("시간", getOriginTime());
};

export { adjustContest, initData, adjustTime };
