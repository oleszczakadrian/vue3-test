<template>
    <section v-if="ships">
        <h1>Ship list:</h1>
        <StarshipItem v-for="(ship, index) in ships" :key="index" :ship="ship" />
    </section>
</template>

<script>
    import { ref } from "vue";
    import StarshipItem from "./StarshipItem";

    export default {
        name: "StarshipList",
        components: {
            StarshipItem
        },
        async setup() {
            const ships = ref(null);

            // fetch asynchroniczny, więc steup async a response in parsedResponse await
            const response = await fetch('https://swapi.dev/api/starships/');
            const parsedResponse = await response.json();

            ships.value = [...parsedResponse.results];

            return { ships }
        }
    }
</script>

<style lang="scss" scoped>

</style>