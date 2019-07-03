import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get("https://nuxtjs-66bf5.firebaseio.com/posts.json")
          .then((response) => {
            const postsArray = [];

            for (const key in response.data) {
              postsArray.push({ ...response.data[key], id: key });
            }

            vuexContext.commit("setPosts", postsArray);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
