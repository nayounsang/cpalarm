import { CheerioAPI } from "cheerio";
import getHtml from "./getHtml";
import { bojSelector,bojConstestTitle,bojContestTime } from "../const/selector";
import bojContestUrl from "../const/url";

const getBojTitle = ($:CheerioAPI):string[] => {
    const result:string[] = [];
    $(bojSelector + bojConstestTitle).each((index, element) => {
        const data = $(element).text(); 
        result.push(data); 
      });
    return result;
}

const getBojTime = ($:CheerioAPI):(string | undefined)[] => {
    const result:(string | undefined)[] = [];
    $(bojSelector + bojContestTime).each((index, element) => {
        const data = $(element).attr('data-timestamp');
        result.push(data);
      });
    return result;
}

const getBojInfo = async () => {
    const $ = await getHtml(bojContestUrl);
    const title = getBojTitle($);
    const time = getBojTime($);
    const result = title.reduce((obj:Object, key:string, index:number) => {
        obj[key] = time[index];
        return obj;
      }, {});
    return result;
}

export default getBojInfo