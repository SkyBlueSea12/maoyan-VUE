import Vue from "vue";

 Vue.filter("ToImg",(path,info)=>{
    return path.replace(/w\.h/,info)
 })