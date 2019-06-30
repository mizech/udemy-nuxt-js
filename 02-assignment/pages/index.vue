<template>
  <div class="wrap">
    <posts :postItems="items" />
  </div>
</template>

<script>
import postsList from "~/components/posts/postsList.vue";

export default {
  components: {
    "posts": postsList
  },

  asyncData(context, callback) {
        setTimeout(() => {
          callback(null, { 
              items: [
                        {
                            title: "The first title",
                            subTitle: "The first sub-title ...",
                            text: "Dolor kasd labore takimata sit diam stet dolore. Diam est erat et sanctus lorem lorem eos. Dolore et magna sit."
                        },
                        {
                            title: "The second title",
                            subTitle: "The second sub-title ...",
                            text: "But consecrate spent pollution yet his mote could break feeble. The dote things where bidding."
                        },
                        {
                            title: "The third title",
                            subTitle: "The third sub-title ...",
                            text: "Seguitando merito se e di e di divina facciamo e esser. Facciamo procuratori non quella."
                        }
                    ]
            }
          )
        }, 2000);
    },
    
    data() {
      return {
        items: []
      }
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
