// pages/yuedu/yuedu.ts
import {Article} from '../../utils/objs';

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        currentPages: -1,
        articList: Array<Article>(),
    },
    lifetimes:{
        ready:function(){      
            if(this.data.currentPages >= 0){
                return;
            }
            let list = this.data.articList;
            let one = new Article();
            one.id = "1";
            one.desc = "技术";
            one.type = "Blog";
            one.title = "智能合约";
            one.img = "/assets/like.png"
            one.url = "https://my.askdao.top/2023/03/zhinengheyue";
            list.push(one);
            one = new Article();
            one.id = "1";
            one.desc = "技术";
            one.type = "Blog";
            one.title = "智能合约";
            one.img = "/assets/like.png"
            one.url = "https://my.askdao.top/2023/03/zhinengheyue";
            list.push(one);
            this.setData({currentPages: 0, articList:list})     
        }

    },
    /**
     * 组件的方法列表
     */
    methods: {
        blogClick(e: any){
            console.log("YueDu:", e)
        }
    }
})
