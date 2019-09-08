<template>
        <div class="page">
            <HeaderCom></HeaderCom>
            <div id="content">
                  <!-- <div class="movie_menu">
                        <div class="movie_menu_city">
                              <span>北京</span>
                              <i class="iconfont">&#xe61e;</i>
                        </div>
                        <ul class="movie_menu_switch">
                              <li class="movie_menu_active">正在热映</li>
                              <li>即将上映</li>
                        </ul>
                        <div class="movie_menu_search">
                              <i class="iconfont">&#xe617;</i>
                        </div>
                  </div> -->

                  <div class="search_movie_body">
                      <div class="search_movie_input">
                          <input type="text">
                      </div>
                      <h2>电影/电视剧/综艺</h2>
                      <div class="movie_item">
                              <div class="movie_item_pic">
                                    <img src="https://p0.meituan.net/128.180/moviemachine/582e897a81f93cf1b15370c7cfa4eef58134053.jpg">
                              </div>
                              
                                    <div class="movie_item_info">
                                                <h2>幸福俏冤家</h2>
                                                <p><span class="person">273</span>人想看</p>
                                                <p>主演:<span>巩汉林,金珠,巩天阔</span></p>
                                                <p><span>2019-09-10上映</span></p>
                                    </div>
                                    <div class="movie_item_btn person">想看</div>
                        </div>
                      
                  </div>
            </div>
        </div>
</template>

<script>
    export default{

    }
</script>

<style>
       #content{
            width:100%;
            height:100%;
            position:absolute;
            padding-top: 1rem;
            padding-bottom: 1rem;
      } 
        /* #content .movie_menu{
             width:100%;
             height:.9rem;
             background-color: #fff;
             display: flex;
             justify-content: space-between;
             align-items: center;
             padding: .4rem;
             border:1px solid #e6e6e6;
       } */
         /* #content .movie_menu  .movie_menu_city  span{
            font-size: .3rem;
      }
       #content .movie_menu  .movie_menu_city i{
            font-size: .3rem;
      } */
       /* #content .movie_menu .movie_menu_search i{
             font-size:.4rem;
             font-weight: 900;
             color:#e54847;
       } */
        /* #content .movie_menu .movie_menu_switch{
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
        } */


           #content  .search_movie_body {
              height:100%;
              padding-bottom: 1rem;
              padding-left: .2rem;
              padding-right: .2rem;
              overflow-x: hidden;
        }
        /* 这里是新写部分 */
        #content .search_movie_body .search_movie_input{
            padding:.16rem .2rem;
            background-color: #f5f5f5;
            border-bottom:1px solid #e5e5e5;
        }
         #content .search_movie_body .search_movie_input>input{
             border:none;
             font-size:.3rem;
             color:#333;
             padding:.1rem 0;
             outline:none;
             margin-left:5px;
             width:100%;
         }


         #content .search_movie_body>h2{
             font-size:.3rem;
             color:#999;
             padding:.18rem 0;
             border-bottom:1px solid #e6e6e6;

         }
          #content  .search_movie_body .movie_item {
            padding:.2rem 0;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;

      }
        #content  .search_movie_body .movie_item .movie_item_pic{
                width:1.28rem;
                height:1.8rem;
        }
        #content  .search_movie_body .movie_item .movie_item_pic img{
                width:100%;
                height:100%;
        }
        #content  .search_movie_body .movie_item .movie_item_info{
            margin-left: .2rem;
            flex:1;
            height:100%;
        }
        #content  .search_movie_body .movie_item .movie_item_info h2{
            font-size: .34rem;
            line-height: .5rem;
            width:3rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        /* 新写 */
          #content  .search_movie_body .movie_item .movie_item_info p{
              font-size:.26rem;
              line-height:.45rem;
              color:#666;
              width:4rem;
              overflow:hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
          } 
        #content  .search_movie_body .movie_item .movie_item_info p .person{
            font-weight: 900;
            color:#faaf00;
            font-size:.3rem;
        }
          #content  .search_movie_body .movie_item .movie_item_btn{
           width:1rem;
           height:.6rem;
           line-height: .6rem;
           text-align: center;
           color:#fff;
           border-radius: 4px;
           font-size:.26rem;
           cursor: pointer;
     }
       #content  .search_movie_body .movie_item>.person{
           background-color:#faaf00;
       }
</style>