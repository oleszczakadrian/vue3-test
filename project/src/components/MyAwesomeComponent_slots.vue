<template>
    <div class="container">
        <AwesomeButton :text="'Hello'">
            <template #image>
                <img src="../assets/logo.png" alt="Logo" class="image">
            </template>
            <template #text>
                Click
            </template>
            <!-- <p>Test</p> -->
        </AwesomeButton>
    </div>
</template>

<script>
    import AwesomeButton from "./AwesomeButton.vue";

    export default {
        name: "MyAwesomeComponent",
        components: {
            AwesomeButton
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
}

.image {
    height: 20px;
    width: 20px;
}
</style>