import axios from "axios";
import { decode } from "iconv-lite";
import { CheerioAPI, load } from "cheerio";
import userAgent from "../const/useragent";
import { Buffer } from 'buffer'

const getHtml = async (url: string):Promise<CheerioAPI> => {
  try{
    const response = await axios.get(url,{
      headers: {
        "User-Agent": userAgent,
        "Accept-Charset": "utf-8",
      },
    })
    const $ = load(decode(Buffer.from(response.data), "utf-8"));
    return $;
  } catch (error){
    throw error;
  }
  
}
export default getHtml;