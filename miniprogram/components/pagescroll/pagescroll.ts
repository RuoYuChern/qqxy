// components/pagescroll/pagescroll.ts
Component({

    options: {
        virtualHost: true
    },
    properties: {
        refresherEnabled: {
          type: Boolean,
          value: true
        },
        refresherThreshold: {
          type: Number,
          value: 45
        },
        refresherDefaultStyle: {
          type: String,
          value: 'black'
        },
        refresherBackground: {
          type: String,
          value: '#FFF'
        },
        refresherTriggered: {
          type: Boolean,
          value: true
        },
        lowerThreshold: {
          type: Number,
          value: 50
        },
        scrollIntoView: {
          type: String,
          value: ''
        }
      },
    methods: {
        onScroll: function onScroll(e:any) {
            this.triggerEvent('scroll', e.detail);
        },
        onScrollToLower: function onScrollToLower(e:any) {
            this.triggerEvent('scrollToLower', e.detail);
        },
        onPulling: function onPulling(e:any) {
            this.triggerEvent('pulling', e.detail);
        },
        onRefresh: function onRefresh(e:any) {
            this.triggerEvent('refresh', e.detail);
        },
        onRestore: function onRestore(e:any) {
            this.triggerEvent('restore', e.detail);
        },
        onAbort: function onAbort(e:any) {
            this.triggerEvent('abort', e.detail);
        }
    }
})
