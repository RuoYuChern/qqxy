// pages/login/login.ts
const defaultAvatarUrl = '/assets/0p.png'

Page({
    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl: defaultAvatarUrl,
        nickName: "",
        errorVisable:false
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        wx.setNavigationBarTitle({title: '细语-登录'})
    },
    onUnload(){
        // 禁用
        wx.hideHomeButton()
    },
    onChooseAvatar(e:any) {
        const { avatarUrl } = e.detail 
        this.setData({
          avatarUrl,
        })
    },
    login(){
        if (this.data.nickName.trim() !== '' && this.data.avatarUrl !== defaultAvatarUrl) {
            // 页面跳转
            let app = getApp<TaoIAppOption>();
            app.globalData.dao.loginUser.nickName = this.data.nickName
            app.globalData.dao.loginUser.avatar   = this.data.avatarUrl
			wx.redirectTo({url:'/pages/index/index'})
			return;
		}else{
            this.setData({errorVisable:true})
        }
    }
})