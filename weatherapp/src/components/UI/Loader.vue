<template>
  <div v-if="this.showLoad" class="container">
    <div  class="loader"></div>
    <p>Ищем города...</p>
  </div>
</template>

<script>
export default {
  name: "loader",
  props: {
    showLoad: true,
  },
};
</script>

<style scoped>
.container {
  display: block;
  color: rgba(199, 194, 194, 0.534);
  font-family: "Bebas Neue";
  font-size: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  top: 225px;
}
.loader {
  border: 16px solid rgba(151, 148, 148, 0.116);
  border-top: 16px solid rgba(199, 194, 194, 0.534);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
