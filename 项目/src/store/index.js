import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  person:'',
  password:'',
  truePerson:'',
  truePassword:'',
  pan:1,
  personId:'20',
  dialogVisible: false,
  fresh:true,
  bigname:'big',
}

const mutations={
  
  PAN2(state,value){
    document.querySelector('body').removeAttribute('style')
    document.querySelector('body').setAttribute('style', "background-image: url(" + require("../assets/R-C.jpg") + ");background-size: cover;" +
                "background-repeat: no-repeat")
    console.log(state.pan);
  },
  PAN3(state,value){
    document.querySelector('body').removeAttribute('style'),document.querySelector('body').setAttribute('style', "background-image: url(" + require("../assets/R-C.jpg") + ");background-size: cover;" +
                "background-repeat: no-repeat")
    console.log(state.pan);
  },
  Check(state,value){
   
    if(state.person==state.truePerson&&state.password==state.truePassword){
      alert('恭喜你登录成功')
    }
    else{
      alert('密码错误');
      state.person=''
      state.password=''

    }
  },
  updateMessage1 (state, message) {
    state.person = message
  },
  updateMessage2 (state, message) {
    state.password = message
  },
  updateMessage3 (state, message) {
    state.truePerson = message
  },
  updateMessage4 (state, message) {
    state.truePassword = message
  }
  
  
}

export default new Vuex.Store({
  state,
  mutations,
})
