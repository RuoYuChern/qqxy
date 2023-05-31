import {toUUID} from './util';
export class Message{
    type: string = "";
    node: string = "";
    messageId: string = "";
    senderId: string = "";
    name: string = "";
    avatar: string = "";
    showTime: string = "";
    timestamp: number = 0;
    finalDuration: number = 0;
    status: string = "";
    size: number = 0;
    width: number = 0;
    payload: {} = {};
    recalled: boolean = false;
    editable: boolean = false;
    checked: boolean = false;
    read:boolean = false;
}

export class IMUser{
    id:string = "";
    nickName:string = "";
    avatar: string = "";
}

export const toMessage = (type: string, raw: any, usr:IMUser)=>{
    var t = Date.now();
    let payload = {};
    if(type === "text"){
        payload = {text: raw.content}
    }else if(type === "image"){
        payload = {url: raw.content}
    }
    let msg: Message ={
        type: type,
        node: "",
        messageId: toUUID(t),
        senderId: usr.id,
        name: usr.nickName,
        avatar: usr.avatar,
        showTime: "",
        timestamp: t,
        finalDuration: raw.finalDuration,
        status:"sending",
        size: raw.size,
        width: raw.width,
        payload:payload
    }
    return msg;
}
