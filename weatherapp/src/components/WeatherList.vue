<template>
  <div class="weather-container" :class="{ 'single-element': getArrayLenght }">
    <weather-item
      v-for="weather in data"
      :weatherData="weather"
      :key="weather.dt"
    ></weather-item>
  </div>
</template>

<script>
export default {
  name: "weather-list",
  props: {
    data: Array,
  },
  computed: {
    getArrayLenght() {
      console.log(this.data.length);
      return this.data.length <= 3 ? true : false;
    },
  },
};
</script>

<style scoped>
.weather-container {
  max-width: 880px;
  height: 466px;
  margin: 0px;
  padding-left: 30px;
  padding-right: 30px;
  overflow: scroll;
  overflow-y: hidden;
  display: flex;
  column-gap: 30px;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;
}
.weather-container.single-element {
  justify-content: center;
}
.weather-container::-webkit-scrollbar {
  background-color: rgba(151, 148, 148, 0.116);
  padding-top: 10px;
  width: 20px;
}
.weather-container::-webkit-scrollbar-thumb {
  background-color: rgba(199, 194, 194, 0.534);
  width: 10px;
}
.weather-container::-webkit-scrollbar-thumb:hover {
  background-color: rgba(238, 235, 235, 0.534);
  transition: all 0.4s;
}
</style>
