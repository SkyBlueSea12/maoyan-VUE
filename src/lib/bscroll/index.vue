<template>
        <div class="wrapper" ref="wrapper">
          <slot></slot>
</div>
</template>

<script>
    import BScroll from "better-scroll"
    export default{
        name:"happy-BScroll",
        mounted () {
           this.scroll = new BScroll(this.$refs.wrapper,{
                tap:true,
                pullDownRefresh:true,
                pullUpLoad:true
            });
        },
        methods: {
            // 下来刷新加载数据
            handlepullingDown(callback){
                this.scroll.on("pullingDown",()=>{
                      callback();
                })
            },
            // 下拉刷新加载数据完毕通知better-scroll
            handlefinishPullDown(){
                this.scroll.finishPullDown();
                this.scroll.refresh();
            },
            // 上拉加载更多
            handlepullingUp(callback){
                 this.scroll.on("pullingUp",()=>{
                      callback();
                })
            },
            // 
       handlefinishPullUp(){
                this.scroll.finishPullUp();
                this.scroll.refresh();
            },
        }
    }
</script>

<style>
    .wrapper{
        height:100%;
    }

</style>