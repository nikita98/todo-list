import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

Vue.config.productionTip = false;

new Vue({
  store,
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyBJLRpOsZWvR5Cui24Hs4oHocoqqKmlx6k",
      authDomain: "task-list-36bda.firebaseapp.com",
      databaseURL: "https://task-list-36bda.firebaseio.com",
      projectId: "task-list-36bda",
      storageBucket: "task-list-36bda.appspot.com",
      messagingSenderId: "460225703659",
      appId: "1:460225703659:web:abad589b5eff10835dd8ae"
    };
    firebase.initializeApp(firebaseConfig);
  },
  render: h => h(App)
}).$mount("#app");
