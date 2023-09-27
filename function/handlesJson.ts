import * as FileSystem from "expo-file-system";

const loadJSONFile = async (
  filePath: string,
  defaultValue: any
): Promise<string> => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(
      FileSystem.documentDirectory + filePath
    );
    if (fileInfo.exists) {
      const data = await FileSystem.readAsStringAsync(
        FileSystem.documentDirectory + filePath
      );
      return data;
    } else {
      return defaultValue;
    }
  } catch (error) {
    console.log(`${filePath} 불러오기 오류:`, error);
    return defaultValue;
  }
};

const saveJSONFile = async (filePath: string, data: any): Promise<void> => {
  try {
    await FileSystem.writeAsStringAsync(
      FileSystem.documentDirectory + filePath,
      JSON.stringify(data),
      {
        encoding: FileSystem.EncodingType.UTF8,
      }
    );
  } catch (error) {
    console.error(`${data}저장 오류:`, error);
  }
};

const initJSONFile = async (filePath: string, data: any) => {
  try {
    const dirInfo = await FileSystem.getInfoAsync(
      FileSystem.documentDirectory + filePath
    );
    if (!dirInfo.exists) {
      saveJSONFile(filePath, data);
    }
  } catch (error) {
    console.error(`${data} 처리 오류`, error);
  }
};

const ensureDirExists = async () => {
  const dir = FileSystem.documentDirectory + "data";
  const dirInfo = await FileSystem.getInfoAsync(dir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
  }
};

export { loadJSONFile, saveJSONFile, initJSONFile, ensureDirExists };
