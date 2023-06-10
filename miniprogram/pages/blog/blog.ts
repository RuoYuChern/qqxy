// pages/blog/blog.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: "",
        type:"",
        url:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(option:any) {
        this.setData({id: option.id, type: option.type, url:option.url})
        
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