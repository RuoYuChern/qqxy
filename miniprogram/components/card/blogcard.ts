// components/card/blogcard.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        id:{
            type:String,
            value:""
        },
        picture:{
            type: String,
            value: "" 
        },
        title:{
            type:String,
            value:""
        },
        intro:{
            type:String,
            value:""
        },
        author:{
            type:String,
            value:""
        },
        time:{
            type:String,
            value:""
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleClick() {
            console.log("blog click")
            this.triggerEvent('click', {id: this.properties.id})
        }
    }
})
