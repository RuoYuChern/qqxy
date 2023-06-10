// pages/blog/blog.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        blog_url:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(option:any) {
        this.setData({blog_url:option.url})  
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        console.log("onShow blog info:", this.data)
    }
})