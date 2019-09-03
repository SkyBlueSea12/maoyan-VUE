import Loading from "./index.vue";
import Vue from "vue"

export default ()=>{
    let LoadingComponent = Vue.extend(Loading);//继承了一个组件 可以在页面上任何地方使用 不仅仅在app内

    let vm = new LoadingComponent({
        el:document.createElement("div"),
        // data:{
        //     flag:false
        // },
        methods:{
            handleMount(){
                // this.flag = true
                document.body.appendChild(vm.$mount().$el);
            },
            handleDestory(){
                //  this.flag = false
                document.body.removeChild(vm.$mount().$el);
            }
        }
    })
    // document.body.appendChild(vm.$mount().$el);
    return vm;
}
