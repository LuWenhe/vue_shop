import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: [],
    isCheckedAll: false
  },
  mutations: {
    addCartList(state, payload) {
      let isAlive = false, index

      state.cartList.forEach((item, idx) => {
        if(item.iid === payload.iid) {
          isAlive = true
          index = idx
        }
      })

      // 如果已经存在
      if(isAlive) {
        state.cartList[index].count += 1
      } else {
        payload.count = 1
        payload.checked = false
        state.cartList.push(payload)
      }
    },
    checkCartItem(state, payload) {
      let count = 0

      state.cartList.forEach((item, idx) => {
        if(item.iid === payload.iid) {
          item.checked = !item.checked
        }

        if(item.checked) {
          count++
        }
      })

      if(count == state.cartList.length) {
        state.isCheckedAll = true
      } else {
        state.isCheckedAll = false
      }
    },
    checkAllCartItem(state) {
      state.isCheckedAll = !state.isCheckedAll

      if(state.isCheckedAll) {
        state.cartList.forEach(item => {
          item.checked = true
        })
      } else {
        state.cartList.forEach(item => {
          item.checked = false
        })
      }
    }
  }
})

export default store
