<template>
    <form class="col-md-6"
          @submit.prevent="submit"
    >
        <div class="form-group d-flex flex-column align-items-start">
            <label for="post-title">post title</label>
            <input type="text"
                   id="post-title"
                   class="form-control"
                   v-model="title"
            />
            <label for="post-text"
                   class="mt-3"
            >
                post text
            </label>
            <textarea type="text"
                      id="post-text"
                      class="form-control"
                      placeholder="(^_^) write here"
                      v-model="body"
            ></textarea>
            <button type="submit"
                    class="btn btn-primary mt-3"
            >
                Create Post
            </button>
        </div>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: "PostForm",
    data() {
        return {
            title: '',
            body: ''
        }
    },
    methods: {
        ...mapMutations(['createPost']),
        submit() {
            this.createPost({
                title: this.title,
                body: this.body,
                id: Date.now()
            });
            this.title = this.body = '';
        }
    }
};
</script>

<style scoped>

</style>