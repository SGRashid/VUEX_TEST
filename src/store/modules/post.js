export default {
    actions: {},
    mutations: {},
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts;
        }
    },
};