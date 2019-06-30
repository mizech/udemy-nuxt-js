<template>
    <div>
        <h1>Test</h1>
        <item class="item" 
                v-for="(item, index) in postItems" 
                :key="index" 
                :title="item.title" 
                :subTitle="item.subTitle"
                :text="item.text" 
            />
    </div>
</template>

<script>
import item from "./item.vue";

export default {
    components: {
        item
    },
    props: ["postItems"]
}
</script>

<style>
    h1, .item {
        margin-bottom: 2rem;
    }
</style>