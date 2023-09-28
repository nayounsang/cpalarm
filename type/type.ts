export interface contestType {
  start: string;
  end: string;
  url: string;
  checked: boolean;
}

export type contestTableType = {
  [key: string]: contestType;
};

export interface timeType {
  title: string,
  checked: boolean;
}

export type timeTableType = {
  [key: string]: timeType;
};

export const timeTitle = {
  604800:'1주일',
  259200:'3일',
  86400:'1일',
  1800:'30분',
  600:'10분',
}

