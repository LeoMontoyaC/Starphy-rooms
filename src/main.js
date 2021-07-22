import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDGZscZbXQErDCB91QTRgnAA1uZvQz2xXA",
  authDomain: "starphy-rooms.firebaseapp.com",
  databaseURL: "https://starphy-rooms-default-rtdb.firebaseio.com",
  projectId: "starphy-rooms",
  storageBucket: "starphy-rooms.appspot.com",
  messagingSenderId: "759959569738",
  appId: "1:759959569738:web:d78ce514fb3947532d6db3",
  measurementId: "G-960YPS1T4H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.dispatch('FETCH_USER', {id: store.state.authId});
  },
}).$mount('#app');
