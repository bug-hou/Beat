import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const carstore = new Vuex.Store({
    state:{
        client:{
            goods:{}
        },
        clients:[],
        nowClient:{},
        data:[]
    },
    getters:{

    },
    mutations:{
        add(state,ite){
               let judge = true
              state.clients.forEach((item)=>{
                  if(item.name===ite.name){
                      if(item.pwd===ite.pwd){
                       judge = false;
                       state.nowClient = item
                      }else{
                        this.$router.push("/dengLu")
                      }
                  }
              })
              if(judge){
                state.clients.push(ite);
                state.nowClient = ite
              }
        },
        dataAdd(state,item){
            let judge = true
            state.data.forEach((it)=>{
                if(it.info.name = item.info.name){
                      judge = false;
                }
            })
            if(judge)
            state.data.push(item);
        }
    }
})
export default carstore