<template>
    <div class="container">
        <AddToCartButton @add-item-to-cart="increaseNumberOfItems" />
        <BaseNotification
            :message="notificationText"
            :isVisible="isNotificationVisible"
            @hide-notification="hideNotification"
        />
    </div>
</template>

<script>
    import BaseNotification from "./customEvents/BaseNotification";
    import AddToCartButton from "./customEvents/AddToCartButton";
    import { computed, ref } from "vue";

    export default {
        name: "MyAwesomeComponent",
        components: {
            BaseNotification,
            AddToCartButton
        },
        setup() {
            const numberOfItems = ref(0);
            const notificationText = computed(() => `Number of items in cart: ${numberOfItems.value}`);
            const isNotificationVisible = ref(false);

            // function increaseNumberOfItems(val) {
            //     numberOfItems.value += val;
            //     isNotificationVisible.value = true;
            // }
            
            function increaseNumberOfItems(payload) {
                numberOfItems.value += payload.val;
                isNotificationVisible.value = true;
            }

            function hideNotification() {
                isNotificationVisible.value = false;
            }

            return {
                numberOfItems,
                notificationText,
                isNotificationVisible,
                increaseNumberOfItems,
                hideNotification
            }
        }
    }
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.input {
    margin-top: 10px;
}
.outer {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #42b883;
    margin-top: 10px;
}
.inner {
    width: 50px;
    height: 50px;
    background-color: #35495e;
}
.form {
    display: flex;
    flex-direction: column;
}
</style>