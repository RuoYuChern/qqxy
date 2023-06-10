// index.ts
// 获取应用实例
//const app = getApp<IAppOption>()
import {tabMenu} from './data';

Page({
    data: {
        active: 0,
        logined: false,
        title:'细语-登录',
        scrollIntoView:"pg-scroll",
        list:tabMenu
    },
    onLoad() {
 
    },
    onShow(){
    },
    onLogin(_e:any){
        if(!this.data.logined){
            let title = '细语-心聊'
            this.setData({logined: true, title:title})
        }
    },
    scroll(_e:any){
    },
    onChange(e:any) {
        if(this.data.active != e.detail){
            this.setData({active: e.detail})
            let item = this.data.list[e.detail]
            wx.setNavigationBarTitle({title: `细语-${item.text}`})
        }
    }    
})
