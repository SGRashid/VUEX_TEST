const url = 'https://jsonplaceholder.typicode.com/posts?_limit=';

export default {
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const res = await fetch(url + limit);
            const posts = await res.json();
            ctx.commit('updatePosts', posts);
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost);
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
        postsCount(state) {
            return state.posts.length;
        }
    },
};