<template>
    <div class="page">
        <HeaderCom></HeaderCom>
            <div id="cinema_content">
                    <div class='cinema_nav'>
                        <ul>
                            <li>
                                <span>全城</span>
                                <i class="iconfont">&#xe61e;</i>
                            </li>
                            <li>
                                <span>品牌</span>
                                <i class="iconfont">&#xe61e;</i>
                            </li>
                            <li>
                                <span>特色</span>
                                <i class="iconfont">&#xe61e;</i>
                            </li>
                        </ul>
                    </div>
                    <div class="cinema_body">
                          <div class="cinema_body_detail">
                               <div class='cinema_body_detail_name'>
                                    <span>星典影院(六里桥店)</span>
                                    <span class="cinema_price">18元起</span>
                               </div>
                               <div class='cinema_body_detail_address'>
                                    <span>丰台区西三环南路10号月恒正大新生活广场三层</span>
                                    <span>898.8km</span>
                               </div>
                              
                               <div class='cinema_body_detail_card'>
                                    <div>退</div>
                                     <div>改签</div>
                                    <div>小吃卡</div>
                                    <div>折扣卡</div>
                               </div>
                          </div>
                    </div>
            </div>

    </div>
</template>

<script>
    export default{
        name:"Cinema"
    }
</script>

<style>
    .page{
        height:100%;
    }
    #cinema_content{
          position: absolute;
          width:100%;
          height:100%;
          padding-top:1rem;  
    }
     #cinema_content .cinema_nav{
         width:100%;
         position: fixed;
         height:.92rem;
         border-bottom: 1px solid #ccc;
         z-index:2;
         background: #fff;
     }
    #cinema_content .cinema_nav ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:100%;
    }
     #cinema_content .cinema_nav ul li{
         width:100%;
         text-align: center;
         font-size: .3rem;
      
     }


     .cinema_body{
         position:relative;
         top:.92rem;
         left:0;
         padding-left: .4rem;
         padding-right:.4rem;
         padding-bottom: 1rem;
     }
     .cinema_body .cinema_body_detail{
         margin-top:.4rem;
         border-bottom:1px solid #ccc;
         background:#fff;
     }
      .cinema_body .cinema_body_detail>div{
          margin-bottom: .2rem;
      }
      .cinema_body .cinema_body_detail .cinema_body_detail_name>span:nth-child(1){
          font-size:.35rem;
          margin-right: .2rem;
      }
       .cinema_body .cinema_body_detail .cinema_body_detail_name>span:nth-child(2){
           font-size:.3rem;
           color:#f03d37;
       }
        .cinema_body .cinema_body_detail .cinema_body_detail_address{
            display: flex;
            justify-content: space-between;
            font-size:.26rem;
            align-items:center;
        }
         .cinema_body .cinema_body_detail .cinema_body_detail_card{
             display: flex;
         }
          .cinema_body .cinema_body_detail .cinema_body_detail_card>div{
              padding:0 .06rem;
              height:.36rem;
              line-height:.36rem;
              border-radius: 2px;
              color:#f90;
              border:1px solid #f90;
              font-size:.26rem;
              margin-right:5px;
          }
          .cinema_body .cinema_body_detail .cinema_body_detail_card>div:nth-child(1){
              color:#589daf;
               border:1px solid #589daf;
          }
          .cinema_body .cinema_body_detail .cinema_body_detail_card>div:nth-child(2){
              color:#589daf;
               border:1px solid #589daf;
          }
</style>