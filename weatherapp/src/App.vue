<template>
  <div class="content">
    <span class="content__title">Прогноз погоды по вашему городу</span>
    <div class="control-panel">
      <div class="search-field">
        <w-input v-model:countyName="this.city"></w-input>
        <button class="search" @click="getCountyAndCity"></button>
      </div>
      <w-button
        :disabled="this.activeButton"
        :class="{
          disabBtn: this.activeButton === true,
          aciveBtn: this.clickedButton[0] === true,
        }"
        @click="getNowWeather(1)"
        >На сегодня</w-button
      >
      <w-button
        :disabled="this.activeButton"
        :class="{
          disabBtn: this.activeButton === true,
          aciveBtn: this.clickedButton[1] === true,
        }"
        @click="getTomorrowWeather(2)"
        >На завтра</w-button
      >
      <w-button
        :disabled="this.activeButton"
        :class="{
          disabBtn: this.activeButton === true,
          aciveBtn: this.clickedButton[2] === true,
        }"
        @click="getThreeDayWeather(3)"
        >На 3 дня</w-button
      >
      <w-button
        :disabled="this.activeButton"
        :class="{
          disabBtn: this.activeButton === true,
          aciveBtn: this.clickedButton[3] === true,
        }"
        @click="getFiveDayWeather(4)"
        >На 5 дней</w-button
      >
      <img class="indicator" src="../src/imgs/sunny-day.png" alt="" />
    </div>
    <weatherInfo
      v-if="this.showWeatherInfo"
      :weatherData="this.weatherInfo"
      :showWarn="this.showWarnInWeaherList"
      :city="this.selectedCity"
    ></weatherInfo>
    <cityList
      v-if="this.showList"
      :cityInfo="this.cityInfo"
      @getCityData="getData"
    ></cityList>

    <loader :showLoad="this.showLoader"></loader>

    <span class="emptyList" v-if="this.cityInfo === undefined"
      >Такого города не обнаружено! На всякий случай, возьмите зонтик :)</span
    >
    <span class="warning" v-if="this.showWarn"
      >Прежде чем искать погоду, вы должны выбрать город. Городов ведь много,а вы ничего
      не ввели :(</span
    >
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      cityInfo: [],
      weatherInfo: [],
      city: "",
      weatherAPI: "44a9bc5a5ae8fa1ce09511d0c93bccc8",
      showWarn: false,
      showList: false,
      showWarnInWeaherList: false,
      showWeatherInfo: false,
      selectedCity: null,
      userLanguage: navigator.language,
      activeButton: true,
      clickedButton: [Boolean, Boolean, Boolean, Boolean],
      showLoader: false,
    };
  },
  methods: {
    getCountyAndCity() {
      if (this.city == "") {
        this.showWarn = true;
        return;
      }
      this.showWarnInWeaherList = false;
      this.showWeatherInfo = false;
      this.changeClickedButton();
      this.showWarn = false;
      this.showLoader = true;
      setTimeout(() => {
        this.axiosRequest();
      }, 1000);
    },
    changeClickedButton() {
      this.clickedButton[0] = false;
      this.clickedButton[1] = false;
      this.clickedButton[2] = false;
      this.clickedButton[3] = false;
    },
    async axiosRequest() {
      try {
        var geocodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=5&appid=c02641ad74297c4f67e4e917dca8a150`;
        var responce = await axios.get(geocodingURL);
        if (responce.data[0] === undefined) {
          this.cityInfo = undefined;
          this.showList = false;
          return;
        }
        this.showList = true;
        this.cityInfo = responce.data;
        this.showLoader = false;
      } catch (error) {
        alert(error);
      }
    },
    getData(cityInfo) {
      this.showList = false;
      this.selectedCity = cityInfo;
      this.showWeatherInfo = true;
      this.activeButton = false;
    },
    async getNowWeather(timeStatus) {
      const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.selectedCity.lat}&lon=${this.selectedCity.lon}&lang=${this.userLanguage}&cnt=8&units=metric&appid=c02641ad74297c4f67e4e917dca8a150`;
      try {
        var responce = await axios.get(URL);
        var data = responce.data;
        this.selectWeatherByTimeStatus(timeStatus, data.list);
        this.showWarnInWeaherList = true;
      } catch (error) {
        alert(error);
      }
    },
    async getTomorrowWeather(timeStatus) {
      const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.selectedCity.lat}&lon=${this.selectedCity.lon}&lang=${this.userLanguage}&cnt=16&units=metric&appid=c02641ad74297c4f67e4e917dca8a150`;
      console.log(URL);
      try {
        var responce = await axios.get(URL);
        var data = responce.data;
        this.selectWeatherByTimeStatus(timeStatus, data.list);
        this.showWarnInWeaherList = true;
      } catch (error) {
        alert(error);
      }
    },
    async getThreeDayWeather(timeStatus) {
      const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.selectedCity.lat}&lon=${this.selectedCity.lon}&lang=${this.userLanguage}&cnt=32&units=metric&appid=c02641ad74297c4f67e4e917dca8a150`;
      console.log(URL);
      try {
        var responce = await axios.get(URL);
        var data = responce.data;
        this.selectWeatherByTimeStatus(timeStatus, data.list);
        this.showWarnInWeaherList = true;
      } catch (error) {
        alert(error);
      }
    },
    async getFiveDayWeather(timeStatus) {
      const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.selectedCity.lat}&lon=${this.selectedCity.lon}&lang=${this.userLanguage}&cnt=32&units=metric&appid=c02641ad74297c4f67e4e917dca8a150`;
      console.log(URL);
      try {
        var responce = await axios.get(URL);
        var data = responce.data;
        this.selectWeatherByTimeStatus(timeStatus, data.list);
        this.showWarnInWeaherList = true;
      } catch (error) {
        alert(error);
      }
    },
    selectWeatherByTimeStatus(timeStatus, weatherData) {
      const startDate = new Date();
      this.changeClickedButton();
      if (timeStatus == 1) {
        const tomorrow = new Date(startDate);
        tomorrow.setDate(startDate.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        var arr = weatherData.filter((a, b) => {
          var parsedData = new Date(a.dt_txt);
          if (parsedData < tomorrow) {
            return true;
          }
        });
        this.clickedButton[0] = true;
      }
      if (timeStatus == 2) {
        const tomorrow = new Date(startDate);
        tomorrow.setDate(startDate.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        const limitDay = new Date(startDate);
        limitDay.setDate(tomorrow.getDate() + 1);
        limitDay.setHours(0, 0, 0, 0);
        console.log(limitDay.getDate());
        var arr = weatherData.filter((a, b) => {
          var parsedData = new Date(a.dt_txt);
          if (parsedData >= tomorrow && parsedData < limitDay) {
            return true;
          }
        });
        this.clickedButton[1] = true;
      }
      if (timeStatus == 3) {
        const tomorrow = new Date(startDate);
        tomorrow.setDate(startDate.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        const limitDay = new Date(startDate);
        limitDay.setDate(tomorrow.getDate() + 3);
        limitDay.setHours(0, 0, 0, 0);
        console.log(limitDay.getDate());
        var arr = weatherData.filter((a, b) => {
          var parsedData = new Date(a.dt_txt);
          if (parsedData >= tomorrow && parsedData < limitDay) {
            return true;
          }
        });
        this.clickedButton[2] = true;
      }
      if (timeStatus == 4) {
        const tomorrow = new Date(startDate);
        tomorrow.setDate(startDate.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        const limitDay = new Date(startDate);
        limitDay.setDate(tomorrow.getDate() + 5);
        limitDay.setHours(0, 0, 0, 0);
        console.log(limitDay.getDate());
        var arr = weatherData.filter((a, b) => {
          var parsedData = new Date(a.dt_txt);
          if (parsedData >= tomorrow && parsedData < limitDay) {
            return true;
          }
        });
        this.clickedButton[3] = true;
      }
      this.weatherInfo = arr;
    },
  },
};
</script>

<style>
@import url(../src/Style/DefaultStyle.css);
@import url(../src/Fonts/bebasneue/bebasneue.css);
body {
  height: 100%;
  width: 100%;
}
#app {
  width: 100%;
  height: 100%;
  background-image: url("./imgs/weather backgound.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  background-color: rgba(0, 0, 0, 0.514);
  width: 1000px;
  height: 800px;
  backdrop-filter: blur(10px);
  text-align: center;
}
.content__title {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 50px;
  font-family: "Bebas Neue";
  font-weight: 200;
  color: #ffff;
}
.control-panel {
  display: flex;
  width: 900px;
  margin: 0 auto;
  border-bottom: 1px solid rgb(77, 77, 77);
}
.indicator {
  margin-top: 10px;
  margin-left: 15px;
  height: 47px;
  width: 47px;
}
.search-field {
  margin-top: 10px;
  display: flex;
  transition: all 0.4s;
  height: max-content;
}
.search {
  background-color: rgba(151, 148, 148, 0.116);
  background-image: url(../src/imgs/search.png);
  background-repeat: no-repeat;
  background-position: center;
  border-left: 1px solid rgba(75, 75, 75, 0.288);
  width: 45px;
    height: 45px;
}
.search-field:focus {
  box-shadow: -4px -5px 3px 0px gray;
}
.search-field:hover {
  box-shadow: -4px -5px 3px 0px gray;
}
.warning {
  display: block;
  color: rgba(199, 194, 194, 0.534);
  font-family: "Bebas Neue";
  font-size: 26px;
  margin-top: 250px;
}
.emptyList {
  display: block;
  color: rgba(199, 194, 194, 0.534);
  font-family: "Bebas Neue";
  font-size: 26px;
  margin-top: 250px;
}
</style>
