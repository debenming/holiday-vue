<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>


export default {
  data() {
    return {

    }
  },
  methods: {
    pushShow(m) {
      console.log(m);
      this.$router.push({
        name: m,
      })
    }
  },
  mounted() {
    this.pushShow('denlu')
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>