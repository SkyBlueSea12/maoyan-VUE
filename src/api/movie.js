import http from "utils/http.js";
        
// 正在热映  返回结果是一个promise
export const movie_now_api = (cityId=10)=>http("get","/api/movieOnInfoList",{cityId:cityId});

// 即将上映
export const movie_coming_api = (cityId=10)=>http("get","/api/movieComingList",{cityId:cityId});

// 城市列表
export const city_api = ()=>http("get","/api/cityList");