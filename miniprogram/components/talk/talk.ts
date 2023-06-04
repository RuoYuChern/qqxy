// components/talk/talk.ts
import { Message,IMUser,toMessage} from '../../utils/objs';
import {formatDate} from '../../utils/util';

Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        type: {
            type: String,
            value: ''
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        text: '',
        friend: new IMUser(),
        to: {},// 作为createMessage的参数
        currentUser: new IMUser(),
        otherTypesMessagePanelVisible: false,
        emoji: {
            visible: false,
            map:{}
        },
        history: {
            messages: Array<Message>(),
            allLoaded: false,
            loading: false
        },
        audio: {
            //录音按钮展示
            visible: false
        },
        // 语音播放器
        audioPlayer: {
            audioCtx: null,
            playingMsg: null,
        },
        // 展示消息删除弹出框
        actionPopup: {
            visible: false,
            message: null,
            recallable: false
        },
        // 消息选择
        messageSelector: {
            visible: false,
            messages: Array<Message>()
        }        
    },
    lifetimes: {
        created: function(){
            //var usi = getApp().globalData.userInfo
            let cur: IMUser={id:"987", nickName: "Simon.Chen", avatar:"/assets/xx.png"}
            if(this.properties.type === "XinLiao"){
                let frd : IMUser= {id:"XinLiao", nickName:"细语", avatar:"/assets/xx.png"}
                this.setData({
                    friend: frd,
                    currentUser: cur,
                    to:frd
                })
            }else{
                let frd : IMUser= {id:"ZhongLe", nickName:"细语", avatar:"/assets/xx.png"}
                this.setData({
                    friend: frd,
                    currentUser: cur,
                    to:frd
                })
            }
            this.__initialAudioPlayer()
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        selectMessages(e:any) {
            const selectedMessageIds = e.detail.value;
            var selectedMessages: Message[] = [];
            this.data.history.messages.forEach(message => {
                if (selectedMessageIds.includes(message.messageId)) {
                    selectedMessages.push(message);
                    message.checked = true;
                }
            })
            this.setData({['messageSelector.messages']: selectedMessages});
        },
        reEditMsg(e:any) {
            if (this.data.audio.visible) {
                this.setData({
                    ['audio.visible']: false,
                });
            }
            this.setData({
                ['text']: e.currentTarget.dataset.text,
            });
        },
        showActPopup(e:any){
            const selectedMessageId = e.currentTarget.dataset.messageid;
            let selectedMessage = new Message();
            this.data.history.messages.forEach(message => {
                if (message.messageId === selectedMessageId) {
                    selectedMessage = message;
                }
            });
            const MAX_RECALLABLE_TIME = 3 * 60 * 1000; //3分钟以内的消息才可以撤回
            let recallable = false;
            let timeEearly = ((Date.now() - selectedMessage.timestamp) < MAX_RECALLABLE_TIME);
            let isSelf = (selectedMessage.senderId === this.data.currentUser.id);
            if (timeEearly &&  isSelf && selectedMessage.status === 'success') {
                recallable = true;
            }
            this.setData({
                ['actionPopup.recallable']: recallable,
                ['messageSelector.messages']: [selectedMessage],
                ['actionPopup.visible']: true,
            });
        },
        viewImg(e:any){
            let imagesUrl = [e.currentTarget.dataset.src];
            wx.previewImage({urls: imagesUrl});
        },
        playAudio(e:any){
            let audioMessage = e.currentTarget.dataset.message;
            let playingMessage = this.data.audioPlayer.playingMsg;
            if((this.data.audioPlayer != null) && (this.data.audioPlayer.audioCtx != null)){
                if (playingMessage) {
                    this.data.audioPlayer.audioCtx.stop();
                    // 如果点击的消息正在播放，就认为是停止播放操作
                    if (playingMessage.messageId === audioMessage.messageId) {
                        return;
                    }
                }
                this.setData({['audioPlayer.playingMessage']: audioMessage});
                this.data.audioPlayer.audioCtx.src = audioMessage.payload.url;
                this.data.audioPlayer.audioCtx.play();
            }
        },
        switchAudioKeyboard(){
            // 语音录制按钮和键盘输入的切换
            this.setData({['audio.visible']: !this.data.audio.visible});
            if (this.data.otherTypesMessagePanelVisible) {
                this.setData({otherTypesMessagePanelVisible: false,});
            }
            if (this.data.audio.visible) {
                // 录音授权
                wx.authorize({scope: 'scope.record',success() {}});
            }
        },
        switchEmojiKeyboard() {
            this.setData({
                ['emoji.visible']: !this.data.emoji.visible,
                otherTypesMessagePanelVisible: false,
                ['audio.visible']: false
            });
            // 关闭手机键盘
            wx.hideKeyboard();
        },
        showOtherTypes(){
            this.setData({
                otherTypesMessagePanelVisible: !this.data.otherTypesMessagePanelVisible,
                ['emoji.visible']: false,
                ['audio.visible']: false
            });
            // 关闭手机键盘
            wx.hideKeyboard();
        },
        chooseEmoji(e:any){
            let emojiKey = e.currentTarget.dataset.emojikey;
            emojiKey = this.data.text + emojiKey;
            this.setData({
                text: emojiKey
            });
        },
        onRecordStop(e: any){
            //ToDo
        },
        msgInFocusin(){
            this.setData({otherTypesMessagePanelVisible: false,});
        },
        sendTxtMsg(){
            let cnt = this.data.text.trim()
            if (cnt !== '') {
                let raw = {size: cnt.length, width:0, finalDuration:0, content:cnt}
                let msg = toMessage("text", raw, this.data.currentUser)
                this.__sendMsg(msg)
            }
            this.setData({text: ''})
        },
        sendImageMsgs(){
            //ToDo
        },
        hideActionPopup() {
            this.setData({
                ['actionPopup.recallable']: false,
                ['actionPopup.visible']: false,
                ['messageSelector.messages']: [],
            });
        },
        deleteSingleMessage() {
           //ToDo
        },
        deleteMultipleMessages() {
            //ToDo
        },
        deleteMessage() {
            //ToDo
        },
        showCheckBox() {
            //ToDo
        },
        recallMessage() {
            this.setData({
                ['actionPopup.visible']: false,
            });
        },
        __sendMsg(msg: Message){
            let messages = this.data.history.messages;
            msg.status = "success";
            messages.push(msg);
            this.__renderMessages(messages);
            this.__scrollToBottom();
        },
        __scrollToBottom(){
            setTimeout(() => {
                wx.pageScrollTo({
                    scrollTop: 200000,
                    duration: 10
                });
            }, 600)
        },
        __renderMessages(messages: any) {
            messages.forEach((message:Message, index:number) => {
                if (index === 0) {
                    // 当页面只有一条消息时，显示发送时间
                    message.showTime = formatDate(message.timestamp);
                } else {
                    // 当前消息与上条消息的发送时间进行比对，超过5分钟则显示当前消息的发送时间
                    if (message.timestamp - messages[index - 1].timestamp > 5 * 60 * 1000) {
                        message.showTime = formatDate(message.timestamp);
                    }
                }
                if (message.type === 'text') {
                    // 渲染表情与文本消息
                    //let text = this.data.emoji.decoder.decode(message.payload.text);
                    message.node = message.payload.text;
                    message.editable = (message.type === 'text' && Date.now() - message.timestamp < 60 * 1000);
                    console.log("message.editable:", message.editable)
                }
                if (message.type === 'file') {
                    // 渲染文件消息
                    message.size = (message.payload.size / 1024).toFixed(2);
                }
                if (message.type === 'audio') {
                    message.width = Math.ceil(message.payload.duration)*7+80+'rpx';
                    message.finalDuration = Math.ceil(message.payload.duration)
                }
            });
            this.setData({['history.messages']: messages});
        },
        __initialAudioPlayer () {
            this.setData({
                ['audioPlayer.audioCtx']: wx.createInnerAudioContext(),
            });
            if(this.data.audioPlayer.audioCtx != null){
                this.data.audioPlayer.audioCtx.onEnded(() => {
                        this.setData({['audioPlayer.playingMsg']: null,});
                    });
                    this.data.audioPlayer.audioCtx.onStop(() => {
                        this.setData({['audioPlayer.playingMsg']: null,
                    });
                });
            }
        },   
    }
})
