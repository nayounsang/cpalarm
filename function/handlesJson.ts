import AsyncStorage from "@react-native-async-storage/async-storage";



const loadJSONFile = async <T>(
  key: string,
  defaultValue: any
): Promise<T> => {
  try {
    const dataString = await AsyncStorage.getItem(key);
    if (dataString !== null) {
      return JSON.parse(dataString) as T;
    } else {
      return defaultValue as T;
    }
  } catch (error) {
    console.error(`${key}검색 오류: `, error);
    return defaultValue as T;
  }
};

const saveJSONFile = async (key: string, data: Object): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`${data}저장 오류:`, error);
  }
};

export { loadJSONFile, saveJSONFile };
