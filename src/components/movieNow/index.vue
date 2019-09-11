<template>
  
    <div class="movieWrapper">
         <happy-BScroll ref="happyscroll">
              <div class="movie_body">
                              <div class="movie_item" v-for="(item,index) in movieList" 
                              :key="index" >
                                     <div class="movie_item_pic">
                                          <img :src="item.img | ToImg('128.180')">
                                     </div> 
                                     <div class="movie_item_info">
                                          <h2>{{item.nm}}</h2>
                                          <p>观众评：<span class="grade">{{item.sc}}</span></p>
                                          <p>主演：<span>{{item.star}}</span></p>
                                          <p><span>{{item.showInfo}}</span></p>
                                     </div>
                                     <div :class="item.globalReleased?'movie_item_btn asale':'movie_item_btn ticket'">{{item.globalReleased?'购票':'预售'}}</div>
                                    
                              </div>
                  </div>
          </happy-BScroll>
    </div>

</template>

<script>
 
     import {movie_now_api} from "api/movie"
     import {mapState} from "vuex";
        export default{
             name:"MovieNow",
            async created () {
                if(!sessionStorage.getItem("movieList")){
                     let data = await movie_now_api(this.cityId);
                    this.movieList = data.data.movieList;
                    console.log(this.movieList);
                    sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList)) 
                }

               //   let data = await movie_now_api();
               //   this.movieList = data.data.movieList;
               //   console.log( this.movieList)
             },
          //    keep-alive包裹只会走一次

          async  activated () {
               // 优化
               if(this.pageId!=this.cityId){
                         let data = await movie_now_api(this.cityId);
                    this.movieList = data.data.movieList;
                    // console.log(111);
                    sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList));
                    this.pageId = this.cityId;
               }
                  
            },
             data(){
                  return {
                       movieList:JSON.parse(sessionStorage.getItem("movieList"))||[],

                       pageId:-1
                     
                  }
             },
             computed: {
                ...mapState({
                     cityId:state=>state.city.cityId
                })  
             },
              mounted() {
                this.$refs.happyscroll.handlepullingDown(async ()=>{
                    //  console.log(111)
                     let n = parseInt(Math.random()*7);
                     let arr = [10,1,20,40,50,55,59];


                     let data = await movie_now_api(arr[n]);
                     this.movieList = data.data.movieList;
                     sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
                      this.$refs.happyscroll. handlefinishPullDown();
                })
                 //   上拉加载更多
           
                  this.$refs.happyscroll.handlepullingUp(async ()=>{
                       console.log(111);
                    // 没有接口 模拟

                     let n = parseInt(Math.random()*7);
                     let arr = [10,1,20,40,50,55,59];
                     let data = await movie_now_api(arr[n]);
                    // //  这里和上面不一样，要数据拼接
                     this.movieList = [...this.movieList,  ...data.data.movieList];
                     sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
                      this.$refs.happyscroll.handlefinishPullUp();
                  }) 
            } 
         

        }
</script>

<style>
     .movieWrapper{
          height:100%;
          overflow: auto;
     }
</style>