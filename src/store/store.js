import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const carstore = new Vuex.Store({
    state:{
        client:{
            goods:[]
        },
        clients:[],
        nowClient:{
            goods:[]
        },
        data:[]
    },
    getters:{

    },
    mutations:{
        add(state,ite){
               let judge = true
              state.clients.forEach((item)=>{
                  if(item.id===ite.id){
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
                if(it.info.id === item.info.id){
                      judge = false;
                }
            })
            if(judge)
            state.data.push(item);
        },
        addgoods(state,ite){
            let judge = true;
            state.nowClient.goods.forEach(it=>{
                if(it.name == ite.name){
                   it.count = ite.count;
                   judge = false;
                }
                console.log(ite.name);
            })
            if(judge){
                state.nowClient.goods.push(ite);
            }
        },
        popgoods(state,item){
            state.nowClient.goods.forEach((it,index)=>{
                if(it.name === item.name){
                    if(it.count>0){
                        it.count = item.count;
                    }else{
                        state.nowClient.goods.splice(index,1);
                    }
                }
            })
        },
        leave(state){
            state.clients.forEach(item=>{
                if(item.id===state.nowClient.id){
                    item = state.nowClient;
                    state.nowClient = {}
                }
            })
        }
    }
})
export default carstore