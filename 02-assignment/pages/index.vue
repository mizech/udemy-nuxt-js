<template>
  <div class="wrap">
    <posts />
  </div>
</template>

<script>
import postsList from "~/components/posts/postsList.vue";

export default {
  components: {
    "posts": postsList
  }
}
</script>

<style>
.wrap {
  margin: 2rem auto;
  max-width: 800px;
  width: (100% - 2.5rem);
}
</style>
