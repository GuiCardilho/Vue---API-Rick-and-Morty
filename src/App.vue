<template>
  <TheHeader></TheHeader>
  <router-view/>
  <TheFooter></TheFooter>
</template>

<script>
  import TheHeader from "./components/TheHeader.vue";
  import TheFooter from "./components/TheFooter.vue";

  export default{
    
    name: 'app',

    components: {
      TheHeader,
      TheFooter,
    }
}

</script>

<style>

</style>
