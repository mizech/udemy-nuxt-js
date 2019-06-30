<template>
    <div>
        <h1>Test</h1>
        <item class="item" v-for="item in items" :key="item.title" :title="item.title" :subTitle="item.subTitle" />
    </div>
</template>

<script>
import item from "./item.vue";

export default {
    components: {
        item
    },
    data: function() {
        return {
            items: [
                {
                    title: "First item title",
                    subTitle: "First item sub-title",
                },
                {
                    title: "Second item title",
                    subTitle: "Second item sub-title",
                },
                {
                    title: "Third item title",
                    subTitle: "Third item sub-title",
                }
            ]
        }
    }
}
</script>

<style>
    .item {
        margin-bottom: 2rem;
    }
</style>