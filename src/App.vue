<template>
  <div id="app" class="d-flex flex-column justify-content-start align-items-center">
    <div class="post card w-50 mb-3"
         v-for="post in posts"
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
export default {
    name: 'App',
    data() {
      return { posts: [] };
    },
    async mounted() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const posts = await res.json();
        this.posts = posts;
    },
    components: {}
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
    max-width: 700px !important;
    min-width: 400px !important;
  }
</style>
