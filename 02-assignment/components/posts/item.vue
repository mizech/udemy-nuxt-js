<template>
    <div>
        <h2>{{ title }}</h2>
        <p><strong>{{ subTitle }}</strong></p>
        <p>{{ text }}</p>
    </div>
</template>

<script>

export default {
    name: "item",
    props: [ "title", "subTitle", "text" ]
}
</script>

<style>
    h2, p {
        margin-bottom: .75rem;
    }
</style>