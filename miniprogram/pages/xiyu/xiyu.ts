// pages/xiyu/xiyu.ts
Component({
    /**
     * 组件的初始数据
     */
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'),
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        talks:[{imgUrl:'/assets/xinliao.png',url:'/pages/talks/xintalk',text:'心聊'},
        {imgUrl:'/assets/talk.png',url:'/pages/talks/zhongle',text:'众乐'},
        {imgUrl:'/assets/wenti.png',url:'/pages/talks/wenti',text:'解惑'}]
    },
    lifetimes:{
        ready:function(){
            // @ts-ignore
            var canIUse = this.data.canIUseGetUserProfile
            if (!canIUse && wx.getUserProfile) {
                this.setData({canIUseGetUserProfile: true})
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        getUserProfile() {
            // 推荐使用wx.getUserProfile获取用户信息，避免重复弹窗
            if(!this.data.hasUserInfo){
                wx.getUserProfile({
                    desc: '展示用户信息',
                    success: (res) => {
                        console.log(res)
                        this.setData({
                            userInfo: res.userInfo,
                            hasUserInfo: true
                        })
                    }
                })
            }
        },
        getUserInfo(e: any) {
            // 不推荐使用getUserInfo获取用户信息
            console.log(e)
            this.setData({
                userInfo: e.detail.userInfo,
                hasUserInfo: true
            })
        },
        cardClick(e:any){
            console.log(e)
        }       
    }
})
