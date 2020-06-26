<template>
  <div id="app" class="d-flex flex-column justify-content-start align-items-center p-md-0 p-3">
    <h1>count of posts: {{postsCount}}</h1>
    <PostForm />
    <div class="post card col-md-6 mb-3"
         v-for="post in allPosts"
         :key="post.id"
    >
      <div class="card-body">
        <h5 class="card-title text-left">{{post.title}}</h5>
        <hr />
        <p class="card-text text-left">{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PostForm from './components/PostForm';

export default {
    computed: mapGetters(['allPosts', 'postsCount']),
    methods: mapActions(['fetchPosts']),
    async mounted() {
        this.fetchPosts(5);
    },
    components: { PostForm }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .post {
    /*max-width: 700px !important;*/
    /*min-width: 400px !important;*/
  }
</style>
