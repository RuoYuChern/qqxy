// custom-tab-bar/taobar.ts
import {tabMenu} from './data';

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        active: 0,
        list:tabMenu
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event:any) {
            
            if(this.data.active !== event.detail){
                var url = this.data.list[event.detail].url
                this.setData({ active: event.detail});
                wx.switchTab({url})
            }
        },
        init() {
            const page = getCurrentPages().pop();
            const route = page ? page.route.split('?')[0] : '';
            const active = this.data.list.findIndex(
              (item) =>
                (item.url.startsWith('/') ? item.url.substr(1) : item.url) ===
                `${route}`,
            );
            this.setData({ active });
        }     
    }
})
