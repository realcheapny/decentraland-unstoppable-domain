import { createStore } from "vuex";
import UAuth from "@uauth/js";

export default createStore({
  state: {
    name: "",
  },
  getters: {
    name(state) {
      return state.name;
    },
  },
  mutations: {
    setName: (state, name) => (state.name = name),
  },
  actions: {
    async setUserName({ commit }) {
      try {
        const unstoppableLogin = new UAuth({
          clientID: "e2d93af5-7773-4498-8d6f-86bd70f55ba1",
          scope: "openid email wallet",
          redirectUri: "http://localhost:8080/",
        });
        const userUnstopple = await unstoppableLogin.loginWithPopup();
        console.log(userUnstopple);
        console.log(userUnstopple.idToken.sub);
        commit("setName", userUnstopple.idToken.sub);
      } catch (e) {
        console.error(e);
      }
    },
  },
  modules: {},
});
