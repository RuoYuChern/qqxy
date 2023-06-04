// pages/login/login.ts
const defaultAvatarUrl = '/assets/0p.png'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl: defaultAvatarUrl,
        nickName: ""
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },
    onChooseAvatar(e:any) {
        const { avatarUrl } = e.detail 
        this.setData({
          avatarUrl,
        })
    },
    login(){
        console.log("userName:", this.data.nickName)
        if (this.data.nickName.trim() !== '') {
			// 页面跳转
			wx.navigateTo({url:'/pages/index/index'})
			return;
		}
    }
})