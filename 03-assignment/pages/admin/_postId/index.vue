<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from "axios";

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  asyncData(context, callback) {
    return axios.get("https://nuxtjs-66bf5.firebaseio.com/posts/" + context.params.id + ".json")
                .then((res) => {
                  return {
                    loadedPost: res.data
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
  } /*
  ,
  data() {
    return {
      loadedPost: {
        author: 'Maximilian',
        title: 'My awesome Post',
        content: 'Super amazing, thanks for that!',
        thumbnailLink: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
      }
    }
  }
  */
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
