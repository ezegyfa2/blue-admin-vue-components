<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            content: {
                type: String
            },
            url: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>