
const path = require("path")
    module.exports  =   {
        devServer :{ 
            proxy:{
                // 以/api开头的地址 -------跨域
                "/api":{
                        target:"http://39.97.33.178",
                        changeOrigin:true
                }
              
            }
        },
     
             configureWebpack:{
                    resolve:{
                    //   alias 作用是起一个别名   需要引入path   
                
                       alias:{
                        //    以下是src下面的文件夹
                            "@":path.join(__dirname,'./src'), // @符号代表src
                            "api":path.join(__dirname,'./src/api'), 
                            "components":path.join(__dirname,'./src/components'), 
                            "views":path.join(__dirname,'./src/views'), 
                            "common":path.join(__dirname,'./src/common'), 
                            "utils":path.join(__dirname,'./src/utils'),
                            "router":path.join(__dirname,'./src/router'),
                            "store":path.join(__dirname,'./src/store'),
                            "lib":path.join(__dirname,'./src/lib'),
                           
                            }
                    }
             }
   }

    
    // 配置好了 进行测试
    // 在components里面建了一个文件夹 里面有.vue文件  进行测试