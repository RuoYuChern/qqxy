// pages/xinsheng/xinsheng.ts
import {XinSheng} from '../../utils/objs';
import { Repository } from '../../utils/dao';

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
        loaded: false,
        backTopTheme:'round',
        backTopText:'返回顶部',
        news: Array<XinSheng>(),
    },

    lifetimes:{
        ready:function(){
            if(this.data.loaded){
                return;
            }
            var dao :Repository = getApp<TaoIAppOption>().globalData.dao;
            var usr = dao.loginUser;
            let list = this.data.news;
            var i;
            for(i= 0; i < 50; i++){
                var xs = new XinSheng();
                xs.id = i.toString(10);
                xs.avatar = usr.avatar;
                xs.nickName   = usr.nickName;
                xs.loveTimes = 1+i;
                xs.time = "2023-06-08/15:00:00";
                xs.content = "Hello world, 我很开心，准备干点什么的.Hello world, 我很开心，准备干点什么的.Hello world, 我很开心，准备干点什么的";
                list.push(xs);
            }

            this.setData({loaded:true, news:list})
        }

    },
    pageLifetimes:{
        show: function() {
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onSend(){
            console.log("onSend")
        },

        onLoveClick(e: any){
            var data = e.target.dataset
            var id = data.id
            var isFind = false
            let list = this.data.news;
            list.forEach((v)=>{
                if(v.id === id){
                    isFind = true
                    v.loveTimes = v.loveTimes + 1
                }
            })
            if(isFind){
                this.setData({news:list})
            }
        },
        onToTop(){

        }

    }
})
