<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            sidebar_section: {
                type: Object
            },
            navigation_bar_section: {
                type: Object
            },
            content_section: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>