<template>
  <div class="home">
    <MyAwesomeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import MyAwesomeComponent from "@/components/MyAwesomeComponent.vue";

export default {
  name: "HomeView",
  components: {
    MyAwesomeComponent
  },
};
</script>
