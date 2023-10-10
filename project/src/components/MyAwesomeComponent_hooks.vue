<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="increment">Increment</button>

        <MyAwesomeComponent_hooks_child v-if="count < 3" />
    </div>
</template>

<script>
    import {
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
        ref
    } from 'vue';

    import MyAwesomeComponent_hooks_child from "./MyAwesomeComponent_hooks_child";

    export default {
        name: "MyAwesomeComponent",
        components: {
            MyAwesomeComponent_hooks_child
        },
        setup() {
            const count = ref(0);

            function increment() {
                count.value++;
            }

            console.log("Setup");

            onBeforeMount(() => {
                console.log("onBeforeMount");
            });
            onMounted(() => {
                console.log("onMounted");
            });
            onBeforeUpdate(() => {
                console.log("onBeforeUpdate");
            });
            onUpdated(() => {
                console.log("onUpdated");
            });
            onBeforeUnmount(() => {
                console.log("onBeforeUnmount");
            });
            onUnmounted(() => {
                console.log("onUnmounted");
            });

            return { count, increment }
        }
    }
</script>

<style lang="scss" scoped>

</style>