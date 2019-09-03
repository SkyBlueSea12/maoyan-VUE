<template>
  <div id="app">
     <router-view></router-view>
      <TabBar></TabBar>
    
  </div>
</template>

<script>
   import http from "utils/http"
   // import Loading from "lib/loading/index.js"
   // console.log(Loading().handleDestory())
   import TabBar from "./common/tabBar"
        export default{
           name:"App",
           components: {
              TabBar,
             
           },
           created () {
              http("get","/api/movieOnInfoList?cityId=10").then((data)=>{
                 console.log(data);
              })
           }
        }
</script>

<style>
   
</style>
