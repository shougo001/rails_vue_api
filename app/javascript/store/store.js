import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router/router.js'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    bookInfo: {},
    bookInfoBool: false,
    signedIn: '',
    // test
    count: 1
  },
  mutations: {
    fetchSignedIn(state) {
      // ログイン時，BooleanがlocalStorageに保存される。
      state.signedIn = !!localStorage.signedIn
    },
    fetchBooks(state) {
      state.books = [];
      axios.get('/api/books').then(res => {
        state.books = res.data.books;
      }, (error) => {
        console.log(error)
      });
    },    
    setBookInfo(state, {id}){
      axios.get(`/api/books/${id}`).then(res => {
        state.bookInfo = res.data;
        state.bookInfoBool = true;
      });
    },
    deleteBook(state, {id}) {
      axios.delete(`/api/books/${id}`)
      .then(res => {
        state.books = [];
        state.bookInfo = '';
        state.bookInfoBool = false;
      })
    },
    // test
    increment(state, number) {
      state.count += number
    },
    decrement(state, number) {
      state.count  -= number
    }
  },
  // test
  getters: {
    puls: state => state.count,
    minus: state => state.count
  },
  actions: {
    // ログイン時等において，[$store.dispatch('doFetchSignedIn')]で次のメソッドを呼び出し，[signedIn]を更新する。
    doFetchSignedIn({commit}) {
      commit('fetchSignedIn')
    },
    // test
    increment({commit}, number) {
      commit('increment', number)
    },
    decrement({commit}, number) {
      commit('decrement', number)
    }
  }
})
