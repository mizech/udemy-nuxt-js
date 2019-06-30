<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ subTitle }}</p>
    </div>
</template>

<script>

export default {
    name: "item",
    props: ["title", "subTitle"]
}
</script>

<style></style>