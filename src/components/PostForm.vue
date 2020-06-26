<template>
    <form class="col-md-6">
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
            />
            <button type="submit"
                    class="btn btn-primary mt-3"
            >
                Create Post
            </button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "PostForm",
        date() {
            return {
                title: '',
                body: ''
            }
        }
    }
</script>

<style scoped>

</style>