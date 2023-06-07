// app.ts
import {Repository} from './utils/dao';

interface TaoIAppOption extends IAppOption{
    globalData: {
        userInfo?: WechatMiniprogram.UserInfo,
        dao:Repository
    }
}

App<TaoIAppOption>({
  globalData: {
      dao: new Repository(),
  },
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        this.globalData.dao.loginUser.id = res.code
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})