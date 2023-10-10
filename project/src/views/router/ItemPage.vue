<template>
    <section class="wrapper">
        <Suspense>
            <template #default>
                <ItemDetails :id="id" />
            </template>
            <template #fallback>
                <BaseLoader />
            </template>
        </Suspense>
    </section>
</template>
  
<script>
import BaseLoader from '@/components/starWars/BaseLoader';
import ItemDetails from '@/components/starWars/ItemDetails';

export default {
    name: "ItemPage",
    components: {
        BaseLoader,
        ItemDetails
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    setup() {
        
        
        return {
            
        }
    }
};
</script>
  
<style lang="scss" scoped>
.wrapper {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    min-height: 100vh;
}
</style>