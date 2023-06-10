import { toUUID } from "./util";

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

export class Article{
    id:string = "";
    type:string = "";
    title: string = "";
    desc: string = "";
    img: string = "";
    url: string = "";
    author: string = "";
    time: string ="";
    loveTimes: number = 0;
    payload: {} = {}
}

export class XinSheng{
    id: string = "";
    nickName: string = "";
    avatar: string = "";
    content: string = "";
    time: string ="";
    loveTimes: number = 0;
}

export class Music{
    id: string = "";
    title: string = "";
    img: string = "";
    url: string = "";
    singer:string = "";
    loveTimes: number = 0;
    tags: string[] = [];
}

export const toMessage = (type: string, raw: any, usr:IMUser)=>{
    var t = Date.now();
    let payload = {};
    if(type === "text"){
        payload = {text: raw.content}
    }else if(type === "image"){
        payload = {url: raw.content}
    }
    var msg = new Message();
    msg.type = type;
    msg.node = "";
    msg.messageId = toUUID(t);
    msg.senderId = usr.id;
    msg.name = usr.nickName;
    msg.avatar = usr.avatar;
    msg.showTime = "";
    msg.timestamp = t;
    msg.finalDuration = raw.finalDuration;
    msg.status = "sending";
    msg.size = raw.size;
    msg.width = raw.width;
    msg.payload = payload;
    return msg;
}
