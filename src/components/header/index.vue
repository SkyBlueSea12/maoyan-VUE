<template>
        <div class="header">
                <h2>{{title}}</h2>
        </div>

</template>

<script>
        export  default{
            name:"HeaderCom",
            props:{
                title:{
                    type:String,
                    default:"猫眼电影"
                }
            }
        }
</script>

<style>
    .header{
        width:100%;
        height:1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color:#fff;
        background: #c33;
        position: fixed;
        left:0;
        top:0;
    }
</style>