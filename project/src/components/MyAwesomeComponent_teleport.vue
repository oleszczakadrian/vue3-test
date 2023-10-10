<template>
    <div class="container">
        <AwesomeButton text="Log in" @click="isModalVisible = true" />
        <teleport to="#modal">
            <AwesomeModal v-show="isModalVisible" />
        </teleport>
        <AwesomeFooter />
    </div>
</template>

<script>
import AwesomeButton from "./teleportComponents/AwesomeButton.vue";
import AwesomeFooter from "./teleportComponents/AwesomeFooter.vue";
import AwesomeModal from "./teleportComponents/AwesomeModal.vue";

import { ref } from 'vue';

export default {
    name: "MyAwesomeComponent",
    components: {
        AwesomeButton,
        AwesomeFooter,
        AwesomeModal
    },
    setup() {
        const isModalVisible = ref(false);

        return { isModalVisible }
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
</style>