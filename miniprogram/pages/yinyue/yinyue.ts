// pages/yinyue/yinyue.ts
import {Music} from '../../utils/objs'

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
        backTopTheme:'round',
        backTopText:'返回顶部',        
        loaded: false,
        musics: Array<Music>(),
    },

    lifetimes:{
        ready:function(){
            if(this.data.loaded){
                return;
            }
            let list = this.data.musics;
            for(var i = 0; i < 10; i++){
                var m = new Music()
                m.id = i.toString();
                m.img = '/assets/yinyue.png'
                m.loveTimes = i
                m.title = '天意'
                m.singer = '刘德华'
                m.tags = ['悲伤','低沉']
                list.push(m)
            }
            this.setData({loaded:true, musics:list})
        }

    },
    pageLifetimes:{
        show: function() {
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        scroll(e:any){
            console.log(e)
        },
        onToTop(){
            
        }

    }
})
