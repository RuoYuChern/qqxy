// pages/blog/blog.ts
import towxml from '../../../towxml/index';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        article: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(option:any) {
        let base = option.url
        let idx = base.indexOf('/',8)
        if (idx > 0){
            base = base.substring(0, idx)
            console.log("base:", base)
        }

        const _ts = this;
        wx.request({url:option.url, success(res){
                let data = towxml(res.data, 'html',{
                    base: base,
                    theme:'light'
                })
                _ts.setData({article:data})
            }, fail(res){
                let data = res.errMsg
                _ts.setData({article:data})
            }}
        )
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