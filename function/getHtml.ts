import axios from "axios";
import { decode } from "iconv-lite";
import { CheerioAPI, load } from "cheerio";
import userAgent from "../const/useragent";
import { Buffer } from "buffer";

const getHtml = async (url: string): Promise<CheerioAPI> => {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent": userAgent,
        "Accept-Charset": "utf-8",
      },
    });
    const $ = load(decode(Buffer.from(response.data), "utf-8"));
    return $;
  } catch (error) {
    throw error;
  }
};

const getHtmlWithAttr = ($: CheerioAPI, selector: string, attr: string):string[] => {
  const result:string[] = [];
  $(selector).each((index, element) => {
    const data = String($(element).attr(attr));
    result.push(data);
  });
  return result;
};

export { getHtmlWithAttr };

export default getHtml;
