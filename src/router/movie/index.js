export default{
    path:'/movie',
    component: ()=>import('views/movie'),
    name:"movie",
    redirect: "/movie/movienow",
    children:[
        {
            path:'movienow',
            component:()=>import("components/movieNow"),
            name:"movienow"
        },
        {
            path:'moviecoming',
            component:()=>import("components/movieComing"),
            name:"moviecoming"
        }
    ]

}