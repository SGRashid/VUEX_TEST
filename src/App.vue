<template>
  <div id="app" class="d-flex flex-column justify-content-start align-items-center">
    <div class="post card w-50 mb-3"
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
  import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['allPosts']),
    async mounted() {
        this.$store.dispatch('fetchPosts');
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
