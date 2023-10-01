import * as Notifications from "expo-notifications";
import { contestTableType, timeTableType, timeTitle } from "../type/type";
import { loadJSONFile } from "./handlesJson";
import { _contestTitle, _titeTitle } from "../const/title";
import { Platform } from "react-native";
import * as Device from "expo-device";

const makeNotificationId = (title: string, time: string): string => {
  return title + time;
};

const pushNotification = async (title: string, body: string, time: number) => {
  const id = makeNotificationId(body, title);
  try {
    Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
      },
      identifier: id,
      trigger: {
        date: new Date(time * 1000),
      },
    });
  } catch (error) {
    console.error("push notification error:", error);
  }
};

const cancelAllNotifications = async () => {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
  } catch (error) {
    console.error("cancel notification error", error);
  }
};

const makeNotification = async (
  contestTable: contestTableType,
  timeTable: timeTableType
) => {
  await cancelAllNotifications();
  for (const contest of Object.keys(contestTable)) {
    if (contestTable[contest].checked) {
      for (const diff of Object.keys(timeTable)) {
        if (timeTable[diff].checked) {
          await pushNotification(
            timeTitle[diff],
            contest,
            Number(contestTable[contest].start) - Number(diff)
          );
        }
      }
    }
  }
  for (const push of  await Notifications.getAllScheduledNotificationsAsync()){
    console.log(push.content.title,push.content.body,new Date(push.trigger.value))
  }
};

const adjustNotification = async () => {
  for (const contest of _contestTitle) {
    const contestTable = await loadJSONFile<contestTableType>(contest, {});
    const timeTable = await loadJSONFile<timeTableType>(_titeTitle, {});
    console.log(contestTable, timeTable);
    await makeNotification(contestTable, timeTable);
    
  }
};

export const initNotification = async () => {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      console.log("Failed to get permission for push notification!");
      return;
    }
    if (finalStatus === "granted") {
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
        }),
      });
    }
  } else {
    console.log("Must use physical device for Push Notifications");
  }
};

export default adjustNotification;
