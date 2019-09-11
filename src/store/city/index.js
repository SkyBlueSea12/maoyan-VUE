import {city_api} from "api/movie"
const state = {
    cityHot:JSON.parse(sessionStorage.getItem("cityHot")) || [],
    cityList:JSON.parse(sessionStorage.getItem("cityList")) || [],
    cityName: sessionStorage.getItem("cityName") || "北京",
    cityId:sessionStorage.getItem("cityId") || 10

}
const actions = {
    async handleGetCityAction({commit}){//异步请求调用axios
        let data = await city_api()
        console.log(data)
        commit("handleGetCityMuctions",data.data.cities);
}
}
const mutations = {
    handleToggleCity(state,params){
        state.cityName = params.cityName;
        state.cityId = params.cityId;
        sessionStorage.setItem("cityName",state.cityName);
        sessionStorage.setItem("cityId",state.cityId);
    },
    handleGetCityMuctions(state,params){
          console.log(params)
           var cityList = [],cityHot = [];
                
            /**
             * 热门城市
             * [{cityId:"",cityName:""}]
             */
            for(var i = 0 ; i < params.length; i++){
                if(params[i].isHot){
                    cityHot.push({
                        cityId:params[i].id,
                        cityName:params[i].nm
                    })
                }
            }
            // console.log(state.cityHot);



            /*
                城市列表
                 [{index:A,list:[{cityId:"",cityName:""},{cityId:"",cityName:""}]}]
            

            */
           for(var i = 0; i < params.length ; i++){
            //    获取城市拼音首字母
               let LetterFirst =  params[i].py.substr(0,1).toUpperCase();
                if(isCityList(LetterFirst)){
                    for(var k = 0 ; k < cityList.length ; k++){
                        if(LetterFirst == cityList[k].index){
                            cityList[k].list.push({cityId:params[i].id,cityName:params[i].nm})
                        }
                    }
                }else{
                    cityList.push({index:LetterFirst,list:[{cityId:params[i].id,cityName:params[i].nm}]})
                }
            }  
        //    判断当前标识是否在cityList当中
           function isCityList(LetterFirst){
            var bStop = false;
              for(var i = 0 ; i <  cityList.length ; i++){
                   if(cityList[i].index == LetterFirst ){
                     bStop  = true;
                       break;
                   }
              }
              return  bStop;
        }
          
        // 将城市按字母排序
        cityList.sort((item1,item2)=>{
            if(item1.index > item2.index){
                return 1;
            }else{
                return -1;
            }
        })
           state.cityList = cityList;
           state.cityHot = cityHot;

        //   数据本地缓存一份
        sessionStorage.setItem("cityList",JSON.stringify(cityList))
        sessionStorage.setItem("cityHot",JSON.stringify(cityHot))

    }
   
}

export default{
    state,
    actions,
    mutations,
    namespaced:true
}