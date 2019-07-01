<template>
  <div class="ngaiwe">
    <a href="www.ngaiwe.com">{{msg}}</a>
  </div>
</template>

<script>
export default {
  name: "ngaiwe",
  data() {
    return {
      msg: "weiran www.ngaiwe.com"
    };
  }
};
</script>

<style scoped>
a {
  font-size: 30px;
  color: #42b983;
  font-weight: normal;
}
</style>
