// pages/login/login.ts
const defaultAvatarUrl = '/assets/0p.png'

Component({
    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl: defaultAvatarUrl,
        nickName: "",
        errorVisable:false
    },

    methods:{
        onChooseAvatar(e:any) {
            const { avatarUrl } = e.detail 
            this.setData({avatarUrl, })
        },
        login(){
            //&& this.data.avatarUrl !== defaultAvatarUrl
            if (this.data.nickName.trim() !== '') {
                // 页面跳转
                let app = getApp<TaoIAppOption>();
                app.globalData.dao.loginUser.nickName = this.data.nickName
                app.globalData.dao.loginUser.avatar   = this.data.avatarUrl
                this.triggerEvent('onLogin', {user: app.globalData.dao.loginUser})
			    return;
		    }else{
                this.setData({errorVisable:true})
            }
        }
    }
})