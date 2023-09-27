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
  checked: boolean;
}

export type timeTableType = {
  [key: string]: timeType;
};
