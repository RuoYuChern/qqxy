import {IMUser} from './objs';

export class Repository{
    loginUser: IMUser = new IMUser();
    xinFriend: IMUser = {id:"XIN0001", nickName:"纤纤", avatar:"/assets/xx.png"};
    zlFriend:  IMUser = {id:"ZL0002", nickName:"纤纤", avatar:"/assets/xx.png"};
    jhFriend:  IMUser = {id:"JH0003", nickName:"纤纤", avatar:"/assets/xx.png"};
    getFriend(type:string):IMUser{
        if(type === "XinLiao"){
            return this.xinFriend;
        }else if(type === "ZL"){
            return this.zlFriend;
        }else{
            return this.jhFriend;
        }
    }
}
