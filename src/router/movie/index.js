export default{
    path:'/movie',
    component: ()=>import('views/movie'),
    name:"movie",
    meta:{
        tabBar:true,
        auth:false
    },
    redirect: "/movie/movienow",
    children:[
        {
            path:'movienow',
            component:()=>import("components/movieNow"),
            name:"movienow",
            meta:{
                tabBar:true,
                auth:false
            },
        },
        {
            path:'moviecoming',
            component:()=>import("components/movieComing"),
            name:"moviecoming",
            meta:{
                tabBar:true,
                auth:false
            },
        }
    ]

}