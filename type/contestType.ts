export interface contestType{
    name:string,
    time:string,
    checked:boolean,
}

export interface timeCheckType{
    checked:boolean,
    time:string,
}

export interface dataType{
    boj:contestType[],
    cf:contestType[],
    time:timeCheckType[],
}