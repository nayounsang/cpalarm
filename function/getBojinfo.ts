import { contestTableType, contestType } from "../type/type";
import { CheerioAPI } from "cheerio";
import getHtml, { getHtmlWithAttr } from "./getHtml";
import {
  bojSelector,
  bojContestTitle,
  bojStartTime,
  bojEndTime,
} from "../const/selector";
import bojContestUrl from "../const/url";

const getBojTitle = ($: CheerioAPI): string[] => {
  const result: string[] = [];
  $(bojSelector + bojContestTitle).each((index, element) => {
    const data = $(element).text();
    result.push(data);
  });
  return result;
};

const getBojInfo = async (): Promise<contestTableType> => {
  const $ = await getHtml(bojContestUrl);
  const title: string[] = getBojTitle($);
  const start: string[] = getHtmlWithAttr(
    $,
    bojSelector + bojStartTime,
    "data-timestamp"
  );
  const end: string[] = getHtmlWithAttr(
    $,
    bojSelector + bojEndTime,
    "data-timestamp"
  );
  const url: string[] = getHtmlWithAttr(
    $,
    bojSelector + bojContestTitle,
    "href"
  );


  const result = title.reduce((obj, key: string, index: number):contestType => {
    obj[key] = {
      start: start[index],
      end: end[index],
      url: url[index],
      checked: false,
    };
    return obj;
  }, {});
  return result;
};

export default getBojInfo;
