<template>
     <div class='movieWrapper' >  
          <happy-BScroll ref="happyscroll">
             <div class="movie_body">
                              <div class="movie_item" v-for="(item,index) in comingList" :key="index" >
                                     <div class="movie_item_pic">
                                          <img :src="item.img | ToImg('128.180')">
                                     </div> 
                                     <div class="movie_item_info">
                                          <h2>{{item.nm}}</h2>
                                           <p><span>{{item.wish}}</span>人想看</p>
                                           <p>主演:<span>{{item.star}}</span></p>
                                           <p><span>{{item.rt}}</span>上映</p>
                                     </div>
                                     <div :class="item.showst==4?'movie_item_btn ticket':'movie_item_btn wantSee'">{{item.showst==4?'预售':'想看'}}</div>
                              </div>
                  </div>
          </happy-BScroll>
       </div> 
</template>
<script>
      import {movie_coming_api} from "api/movie"
        export default{
             name:"MovieComing",
             async created () {
                  if(!sessionStorage.getItem("comingList")){
                    let data = await movie_coming_api();
                    this.comingList = data.data.comingList;
                     sessionStorage.setItem("comingList",JSON.stringify(data.data.comingList))
                  }
                  
                    // console.log(this.comingList)
             },
              async  activated () {
               // 优化
               if(this.pageId!=this.cityId){
                         let data = await movie_coming_api(this.cityId);
                    this.comingList = data.data.comingList;
                    // console.log(111);
                    sessionStorage.setItem("comingList",JSON.stringify(data.data.comingList));
                    this.pageId = this.cityId;
               }
                  
            },
             data(){
                  return {
                     comingList:JSON.parse(sessionStorage.getItem("comingList"))||[]  ,
                     pageId:-1
                  }
             },
             
           mounted() {
                this.$refs.happyscroll.handlepullingDown(async ()=>{
                    //  console.log(111)
                     let n = parseInt(Math.random()*7);
                     let arr = [10,1,20,40,50,55,59];


                     let data = await movie_coming_api(arr[n]);
                     this.comingList = data.data.comingList;
                     sessionStorage.setItem("comingList",JSON.stringify(data.data.comingList))
                      this.$refs.happyscroll. handlefinishPullDown();
                })
                 //   上拉加载更多
           
                  this.$refs.happyscroll.handlepullingUp(async ()=>{
                    //    console.log(111);
                    // 没有接口 模拟

                     let n = parseInt(Math.random()*7);
                     let arr = [10,1,20,40,50,55,59];
                     let data = await movie_coming_api(arr[n]);
                    //  这里和上面不一样，要数据拼接
                     this.comingList = [...this.comingList,...data.data.comingList];
                     sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
                      this.$refs.happyscroll. handlefinishPullUp();
                  }) 
            } 
                  
             
        }
</script>

<style>
  .movieWrapper{
          height:100%;
          overflow: auto;
     }
  .wantSee{
       background-color: #faaf00;
  }
</style>
