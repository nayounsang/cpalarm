import { contestTableType, contestType } from "../type/type";
import getBojInfo from "./getBojinfo";
import { initJSONFile, loadJSONFile } from "./handlesJson";
import { bojJSONPath, timeJSONPath } from "../const/path";

const adjustContest = async (oj: string): Promise<contestTableType> => {
  // oj(cf,boj)에서 새로 얻어온 데이터
  let result:contestTableType = {};
  let prev:contestTableType = {};
  if (oj === "백준") {
    result = await getBojInfo();
    prev = JSON.parse(await loadJSONFile(bojJSONPath, {}));
  } else if (oj === "코드포스") {
    result = {};
    prev = {};
  } else {
    result = {};
    prev = {};
  }
  for (const key in result) {
    if (prev.hasOwnProperty(key)) {
      result[key as keyof contestTableType] = { ...prev[key as keyof contestTableType] };
    }
  }
  return result;
};

const initData = async () => {
  await initJSONFile(bojJSONPath, {});
  await initJSONFile(timeJSONPath, {});
};

export { adjustContest, initData };
