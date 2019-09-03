    import axios from "axios";
    import qs from "qs";
    import Loading from "../lib/loading/index.js"
    const vm = Loading();
    const server = axios.create({
        timeout:5000,
        withCredentials:true
    })

    // 请求拦截器
    server.interceptors.request.use(config=>{
        if(config.method.toUpperCase() == 'GET'){
            config.params = {...config.data}
        }else if(config.method.toUpperCase() == 'POST'){
            config.headers['content-type'] = 'application/x-www-from-urlencoded';
            //config.data = qs.stringify(config.data) 根据需求来定
        }
        vm.handleMount();
        return config;
    },(err)=>{
        Promise.reject(err)
})

    // 响应拦截器

    server.interceptors.response.use(res=>{
        if(res.statusText == 'OK'){
            vm.handleDestory();
            return res.data;
        }
    },(err)=>{
            Promise.reject(err)
    })

    export default (method,url,data={})=>{
        if(method.toUpperCase()=='GET'){
            return server.get(url,{
                params:data
            })
        }else if(method.toUpperCase()=='POST'){
            return server.post(url,data)
        }
    }


