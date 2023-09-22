<template>
  <div class="container">
    <div class="container__info" v-for="city in cityInfo" :key="city.name">
      <div class="info__name">
        <span>Название:</span><span>{{ city.name }}</span>
      </div>
      <div class="info__lat">
        <span>Долгота:</span><span>{{ city.lat }}</span>
      </div>
      <div class="info__lon">
        <span>Широта:</span><span>{{ city.lat }}</span>
      </div>
      <div class="info__country">
        <span>Страна:</span><span>{{ city.country }}</span>
      </div>
      <div v-if="city.state != undefined" class="info__state">
        <span>Область | Штаты:</span><span>{{ city.state }}</span>
      </div>
      <w-button @click="getSelectedData(city)">Выбрать город</w-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityList",
  props: {
    cityInfo: Array,
  },
  data() {
    return {};
  },
  methods: {
    getSelectedData(city) {
      this.$emit("getCityData", city);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 50px;
  margin-top: 30px;
  max-height: 600px;
  overflow: scroll;
  overflow-x: hidden;
}
.container::-webkit-scrollbar {
  background-color: rgba(151, 148, 148, 0.116);
  padding-top: 10px;
  width: 20px;
}
.container::-webkit-scrollbar-thumb {
  background-color: rgba(63, 63, 63, 0.514);
  width: 10px;
}
.container::-webkit-scrollbar-thumb:hover {
  background-color: rgba(199, 194, 194, 0.534);
  transition: all 0.4s;
}
.container__info {
  font-family: "Bebas Neue";
  color: rgba(199, 194, 194, 0.534);
  background-color: rgba(63, 63, 63, 0.514);
  width: 860px;
  height: auto;
  margin: 10px;
  margin-bottom: 20px;
  transition: all 0.4s;
  font-size: 30px;
}
.container__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.container__info > div {
  margin: 10px 10px;
}
.container__info > div:nth-child(1) > span:nth-child(2) {
  margin-left: 126px;
}
.container__info > div:nth-child(2) > span:nth-child(2) {
  margin-left: 136px;
}
.container__info > div:nth-child(3) > span:nth-child(2) {
  margin-left: 146px;
}
.container__info > div:nth-child(4) > span:nth-child(2) {
  margin-left: 152px;
}
.container__info > div:nth-child(5) > span:nth-child(2) {
  margin-left: 50px;
}
.container__info:focus {
  box-shadow: -4px -5px 3px 0px gray;
}
.container__info:hover {
  box-shadow: -4px -5px 3px 0px gray;
}
w-button {
  width: 860px;
}
</style>
