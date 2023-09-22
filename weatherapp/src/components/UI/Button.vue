<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "w-button",
};
</script>

<style scoped>
.btn {
  width: auto;
  height: 45px;
  margin: 10px 10px;
  font-family: "Bebas Neue";
  color: rgba(199, 194, 194, 0.534);
  font-size: 25px;
  background-color: rgba(151, 148, 148, 0.116);
  padding: 0px 10px;
  transition: all 0.4s;
}
.btn:hover {
  background-color: rgba(199, 194, 194, 0.534);
  color: rgba(0, 0, 0, 0.363);
}
.aciveBtn {
  background-color: rgba(199, 194, 194, 0.534);
  color: rgba(0, 0, 0, 0.363);
}

.disabBtn {
  background-color: rgba(0, 0, 0, 0.514);
}
.disabBtn:hover {
  background-color: rgba(0, 0, 0, 0.514);
  color: rgba(199, 194, 194, 0.534);
}
</style>
