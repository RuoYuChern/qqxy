// pages/xiyu/xiyu.ts
Component({
    /**
     * 组件的初始数据
     */
    data: {
        title: "细语",
        userInfo: {avatar:""},
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        talks:[{imgUrl:'/assets/xinliao.png',url:'/pages/talks/xintalk',text:'心聊'},
        {imgUrl:'/assets/talk.png',url:'/pages/talks/zhongle',text:'众乐'},
        {imgUrl:'/assets/wenti.png',url:'/pages/talks/wenti',text:'解惑'}]
    },
    lifetimes:{
        ready:function(){
            // @ts-ignore
            this.setData({userInfo: getApp<IAppOption>().globalData.dao.loginUser})
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {      
    }
})
