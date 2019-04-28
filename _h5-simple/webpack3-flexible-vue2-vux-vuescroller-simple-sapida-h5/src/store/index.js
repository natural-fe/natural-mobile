import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import VuexPersist from 'vuex-persist'
const vuexLocal = new VuexPersist({
    storage:window.sessionStorage
});

const store = new Vuex.Store({
    plugins:[vuexLocal.plugin],
    //定义状态
    state:{
        direction: 'tip',  //tip或者swiper(点击返回还是滑动返回)
    },
    //计算属性
    getters:{

    },
    //修改状态事件，必须同步函数
    mutations:{
        updateDirection (state, payload) {
            state.direction = payload;
        },
    },
    //提交 mutation，可以异步操作
    actions:{

    },
    //模块
    modules:{

    }
})

export default store