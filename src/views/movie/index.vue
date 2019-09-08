
<template>
  <div class="page">
        <HeaderCom/>
        <!-- 内容 -->
            <div id="content">
                  <router-link class="movie_menu" tag='div' to="/cityList">
                        <div class="movie_menu_city">
                              <span>北京</span>
                              <i class="iconfont">&#xe61e;</i>
                        </div>
                        <ul class="movie_menu_switch">
                              <router-link class="movie_menu_active" to="/movie/movienow" tag="li">正在热映</router-link>
                              <router-link to="/movie/moviecoming" tag="li">即将上映</router-link>
                        </ul>
                        <router-link to="/search" class="movie_menu_search" tag="div">
                              <i class="iconfont">&#xe617;</i>
                        </router-link>
                  </router-link>
                  <!-- 这一部分会发生变化---做成组件 二级路由 -->
                  <router-view></router-view>
                  <!-- <div class="movie_body">
                              <div class="movie_item">
                                     <div class="movie_item_pic">
                                          <img src="https://p0.meituan.net/128.180/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg">
                                     </div> 
                                     <div class="movie_item_info">
                                          <h2>哪吒之魔童降世</h2>
                                          <p>观众评：<span class="grade">9.7</span></p>
                                          <p><span>今天217家影院放映1238场</span></p>
                                     </div>
                                     <div class="movie_item_btn asale">购票</div>
                              </div>
                  </div> -->
           </div>
  </div>
</template>

<script>


export default {
  name: 'Movie',

}
</script>

<style>
      .page{
            height:100%;
      }
      #content{
            width:100%;
            height:100%;
            position:absolute;
            padding-top: 1rem;
            padding-bottom: 1rem;
      }
       #content .movie_menu{
             width:100%;
             height:.9rem;
             background-color: #fff;
             display: flex;
             justify-content: space-between;
             align-items: center;
             padding: .4rem;
             border:1px solid #e6e6e6;
       }
      #content .movie_menu  .movie_menu_city  span{
            font-size: .3rem;
      }
       #content .movie_menu  .movie_menu_city i{
            font-size: .3rem;
      }
       #content .movie_menu .movie_menu_search i{
             font-size:.4rem;
             font-weight: 900;
             color:#e54847;
       }
        #content .movie_menu .movie_menu_switch{
              height:100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
             
        }
      #content .movie_menu .movie_menu_switch  li{
      
            line-height: .9rem;
            padding:0  .2rem;
            font-size: .3rem;
         
      }
        #content .movie_menu .movie_menu_switch .movie_menu_active{
              color:#ef4238;
              border-bottom: 2px solid #ef4238;
        }
        #content  .movie_body {
              height:100%;
              padding-bottom: 1rem;
              padding-left: .2rem;
              padding-right: .2rem;
              overflow-x: hidden;
        }
      #content  .movie_body .movie_item {
            padding:.2rem 0;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;

      }
      #content  .movie_body .movie_item .movie_item_pic{
            width:1.28rem;
            height:1.8rem;
      }
      #content  .movie_body .movie_item .movie_item_pic img{
            width:100%;
            height:100%;
      }
     #content  .movie_body .movie_item .movie_item_info{
           margin-left: .2rem;
           flex:1;
           height:100%;
     }
    #content  .movie_body .movie_item .movie_item_info h2{
          font-size: .34rem;
          line-height: .5rem;
          width:3rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
    }
    #content  .movie_body .movie_item .movie_item_info p .grade{
          font-size: .3rem;
          font-weight: 900;
          color:#faaf00;
    }
     #content  .movie_body .movie_item .movie_item_btn{
           width:1rem;
           height:.6rem;
           line-height: .6rem;
           text-align: center;
           color:#fff;
           border-radius: 4px;
           font-size:.26rem;
           cursor: pointer;
     }
      #content  .movie_body .movie_item .asale{
            background-color: #f03d37;
      }
        #content  .movie_body .movie_item .ticket{
            background-color: #3c9fe6;
      }
</style>
