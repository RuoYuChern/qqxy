// index.ts
// 获取应用实例
//const app = getApp<IAppOption>()
const tarbar = [
    {text: '首页', normal: '/assets/message.png', active: '/assets/message-hl.png'},
    {text: '阅读', normal: '/assets/reading.png', active:'/assets/reading-hl.png'},
    {text: '树洞', normal: '/assets/we.png', active:'/assets/we-hl.png'},
    {text: '音乐', normal: '/assets/yinyue.png', active: '/assets/yinyue-hl.png'},
    {text: '我', normal: '/assets/me.png', active: '/assets/me-hl.png'}
]
Page({
    data: {
        active: 0,
        list: tarbar
    },
    onLoad() {
 
    },
    onShow(){
        // 禁用
        wx.hideHomeButton()
    },
    onChange(e:any) {
        if(this.data.active != e.detail){
            this.setData({active: e.detail})
            let item = tarbar[e.detail]
            wx.setNavigationBarTitle({title: `细语-${item.text}`})
        }
    }
})
