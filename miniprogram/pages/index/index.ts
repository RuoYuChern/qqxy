// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const tarbar = [
    {text: '细语', iconPath: '/assets/message.png', selectedIconPath: '/assets/message-hl.png'},
    {text: '阅读', iconPath: '/assets/reading.png', selectedIconPath:'/assets/reading-hl.png'},
    {text: '树洞', iconPath: '/assets/we.png', selectedIconPath:'/assets/we-hl.png'},
    {text: '音乐', iconPath: '/assets/yinyue.png', selectedIconPath: '/assets/yinyue-hl.png'},
    {text: '我', iconPath: '/assets/me.png', selectedIconPath: '/assets/me-hl.png'}
]
Page({
    data: {
        tabIndex: 0,
        list: tarbar
    },
    onLoad() {
 
    },
    switchTab(e:any) {
        const data = e.detail
        if(this.data.tabIndex != data.index){
            this.setData({tabIndex: data.index})
        }
    }
})
