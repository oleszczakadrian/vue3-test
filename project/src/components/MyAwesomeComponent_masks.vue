<template>
    <div>
        <p>Masks: {{ masks }}</p>
        <!-- <p v-if="masks > 3">You can buy a mask!</p>
        <p v-else-if="masks > 0 && masks <= 3">You can buy a mask, but hurry up!</p>
        <p v-else>You can't buy a mask!</p> -->
        <p v-show="masks > 3">You can buy a mask!</p>
        <p v-show="masks > 0 && masks <= 3">You can buy a mask, but hurry up!</p>
        <p v-show="!masks">You can't buy a mask!</p>
        <button v-if="masks > 0" @click="buyMask">Buy a mask</button>
    </div>
</template>
  
<script>
    import { ref } from 'vue';

    export default {
        name: "MyAwesomeComponent",
        setup() {
            const masks = ref(5);


            function buyMask() {
                if( masks.value > 0)
                    masks.value--;
            }

            return {
                masks,
                buyMask
            };
      }
    };
</script>