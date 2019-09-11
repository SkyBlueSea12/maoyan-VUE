<template>
     
            <div class='city_body'>
               <happy-BScroll ref="happyscroll">
                <div>
                <!-- 热门城市 -->
                <div class="hot_city">
                    <div class="hot_title">热门城市</div>
                    <div class="hot_city_list" >
                        <div 
                        class='hot_city_name' 
                        v-for="(item,index) in cityHot"
                         :key="index"
                        >{{item.cityName}}</div>
                   </div>
                </div>

                <!-- 城市列表 -->
                <div class='city_list' ref="list">
                        <div class="city_list_item" v-for="(item,index) in cityList" :key="index">
                            <div class="city_title_letter">{{item.index}}</div>
                              <div class="city_list_name">
                                <!-- 点击获取城市 -->
                                  <v-touch class="city_list_name_item"
                                        v-for="(child,idx) in item.list"
                                        :key="idx"
                                        tag="div"
                                        @tap="handleTo(child)" 

                                        >{{child.cityName}}
                                  </v-touch>
                                <!-- <div class='city_list_name_item'>北京</div>
                                <div class='city_list_name_item'>北京</div>
                                <div class='city_list_name_item'>北京</div>
                                <div class='city_list_name_item'>北京</div> -->
                              </div>
                             
                        </div>
                     
                      </div>
                
                </div>


                <!-- 城市列表下标 -->
                <div class="city_list_index" >
                     <v-touch 
                     class="index_item"
                      @tap="handleIndexTo(index)" 
                      tag="div"
                     v-for="(item,index) in cityList" 
                     :key="index">{{item.index}}</v-touch>
                     <!-- <div class="index_item">B</div>
                     <div class="index_item">C</div>
                     <div class="index_item">D</div>
                     <div class="index_item">E</div> -->
                </div>
                  </happy-BScroll> 
            </div>
       
</template>

<script>
        import {mapActions,mapState,mapMutations} from "vuex"
        export default{
            name:"CityList",
            created(){
                if(!sessionStorage.getItem("cityHot") || !sessionStorage.getItem("cityList")){
                                this.handleGetCityAction();//ajax请求数据
                }
               
            },
            computed: {
               ...mapState({
                   cityHot:state=>state.city.cityHot,
                   cityList:state=>state.city.cityList
               }) 
            },
            methods: {
                ...mapActions({
                    handleGetCityAction:"city/handleGetCityAction"
                }),
                handleIndexTo(index){
                    console.log(index);
                    let LetterFirst = this.$refs.list.querySelectorAll('.city_title_letter');
                    // console.log(LetterFirst)
                    this.$refs.happyscroll.scroll.scrollTo(0,-LetterFirst[index].offsetTop,500);
                    // this.$refs.happyscroll.scroll.scrollTo(0,LetterFirst[index].offsetTop,500);
                    // this.$refs.scroll.scrollTop = LetterFirst[index].offsetTop;
                },
                handleTo(params){
                 
                    this.handleToggleCity(params);
                    this.$router.push("/movie")
                },
                ...mapMutations({
                    handleToggleCity:"city/handleToggleCity"
                  
                })
            }
        }
</script>

<style>
    .city_body{
        background:#ebebeb;
        height:100%;
        overflow:auto;
    }
    .hot_title,.city_title_letter{
        line-height:.6rem;
        padding-left:.26rem;
        font-size:.28rem;
    }
    .hot_city_list,.city_list_name{
        width:96%;
        background:#f5f5f5;
        padding-bottom: .16rem;
        padding-right: .6rem;
        display: flex;
        flex-wrap: wrap;
    }
    .hot_city_name{
        margin-top:.3rem;
        margin-left:.26rem;
        width:1.9rem;
        height:0.66rem;
        background:#fff;
        text-align: center;
        line-height:0.66rem;
        font-size:0.28rem;
        border:2px solid #e6e6e6;
    }
    .city_list>div{
        width:100%;
    }
    .city_list_name_item{
        line-height:.9rem;
        margin-left:.26rem;
        width:100%;
        border-bottom:2px solid #e6e6e6;
        font-size: .28rem;
    }
    /* 城市列表下标 */
    .city_list_index{
        position:fixed;
        right:0;
        top:1rem;
    }
    .city_list_index>div{
        padding:.1rem .05rem;
        font-size: .25rem;
    }
</style>
