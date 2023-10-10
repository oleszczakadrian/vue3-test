<template>
    <div>
        <p>Hi I'm Child component</p>
        <p>Window size: Width: {{ width }}, Height: {{ height }}</p>
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
        onRenderTracked,
        onRenderTriggered,
        ref
    } from 'vue';

    export default {
        name: "MyAwesomeComponent_hooks_child",
        setup() {
            console.log("Child: setup");

            const width = ref(0);
            const height = ref(0);

            function changeWindowSize() {
                height.value = window.innerHeight;
                width.value = window.innerWidth;
            }

            onBeforeMount(() => {
                console.log("Child: onBeforeMount");
            });
            onMounted(() => {
                console.log("Child: onMounted");
                window.addEventListener('resize', changeWindowSize);
            });
            onBeforeUpdate(() => {
                console.log("Child: onBeforeUpdate");
            });
            onUpdated(() => {
                console.log("Child: onUpdated");
            });
            onBeforeUnmount(() => {
                console.log("Child: onBeforeUnmount");
                window.removeEventListener('resize', changeWindowSize);
            });
            onUnmounted(() => {
                console.log("Child: onUnmounted");
            });

            // onActivated
            // onDeactivated

            // onErrorCaptured

            // do debugowania
            onRenderTracked((e) => {
                console.log('onRenderTracked', e);
            });
            onRenderTriggered((e) => {
                console.log('onRenderTriggered', e);
            });

            return { height, width }
        }
    }
</script>

<style lang="scss" scoped>

</style>