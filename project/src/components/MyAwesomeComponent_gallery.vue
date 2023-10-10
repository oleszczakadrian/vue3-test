<template>
    <div>
        <div>
            <p>Masks: {{ masks }}</p>
            <!-- <p v-if="masks > 3">You can buy a mask!</p>
            <p v-else-if="masks > 0 && masks <= 3">You can buy a mask, but hurry up!</p>
            <p v-else>You can't buy a mask!</p> -->
            <p v-show="masks > 3">You can buy a mask!</p>
            <p v-show="masks > 0 && masks <= 3">You can buy a mask, but hurry up!</p>
            <p v-show="!masks">You can't buy a mask!</p>
            <button
                class="btn"
                v-bind:disabled="!masks"
                @click="buyMask"
                :class="{'btn--warning': masks > 0 && masks <= 3}"
            >Buy a mask</button>
        </div>
        <div>
            <img :src="images[currentImage]" :alt="`Image ${currentImage + 1}`" class="image">
            <button class="btn" @click="changeImage" :disabled="currentImage >= images.length -1 ">Change image</button>
        </div>
    </div>
</template>
  
<script>
    import { ref, reactive, toRefs } from 'vue';

    export default {
        name: "MyAwesomeComponent",
        setup() {
            const masks = ref(5);

            const style = reactive({
                btn: {
                    backgroundColor: '#17a2b8',
                    color: '#fff'
                }
            });

            function buyMask() {
                if( masks.value > 0)
                    masks.value--;
            }

            const images = ref([
                'https://www.gstatic.com/webp/gallery/1.jpg',
                'https://www.gstatic.com/webp/gallery/2.jpg',
                'https://www.gstatic.com/webp/gallery/3.jpg',
                'https://www.gstatic.com/webp/gallery/4.jpg',
                'https://www.gstatic.com/webp/gallery/5.jpg'
            ]);

            const currentImage = ref(0);
            
            function changeImage() {
                currentImage.value++;
            }



            return {
                masks,
                buyMask,
                ...toRefs(style),
                images,
                currentImage,
                changeImage
            };
      }
    };
</script>

<style lang="scss">
.btn {
    color: #fff;
    background-color: #369b6d;
    border: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color .3s easy-in;

    &--warning {
        background-color: #ffc107;
        color: #000;
    }

    &:disabled {
        cursor: default;
        background-color: #bd2130;
        opacity: .8;
    }
}

.image {
    margin-top: 30px;
    width: 300px;
    display: block;
}
</style>