<template>
    <nav>
        <ul>
            <li v-for="item in items" :key="item.id">
                <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
