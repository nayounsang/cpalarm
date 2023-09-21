export interface contestType{
    start:string,
    end:string,
    url:string,
    checked:boolean,

}

export type contestTableType = {
    [key:string]:contestType;
}

export interface timeCheckType{
    checked:boolean,
    time:string,
}

