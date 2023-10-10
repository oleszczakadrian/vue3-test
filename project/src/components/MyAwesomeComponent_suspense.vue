<template>
    <div class="container">
        <div v-if="error" class="error">
            <div>Something went wrong</div>
            <p>{{ error }}</p>
        </div>
        <Suspense v-else>
            <template #default>
                <StarshipsList></StarshipsList>
            </template>
            <template #fallback>
                <AppLoader />
            </template>
        </Suspense>
    </div>
</template>

<script>
    import StarshipsList from "./starship/StarshipsList.vue";
    import AppLoader from "./starship/AppLoader.vue";

    import { onErrorCaptured, ref } from 'vue';

    export default {
        name: "MyAwesomeComponent",
        components: {
            StarshipsList,
            AppLoader
        },
        setup() {
            const error = ref(null);

            onErrorCaptured(e => {
                error.value = e;

                return true;
            });

            return { error }
        }
    }
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fcd711;
}

.error {
    color: #cd3727;
}
</style>