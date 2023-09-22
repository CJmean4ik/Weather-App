<template>
  <div class="container">
    <div class="title">
      <span> {{ weatherData.dt_txt }} </span>
      <span> {{ this.currentDayName }} </span>
      <img id="weatherIcon" ref="imgComponent" :src="this.weatherIcon" />
      <span> {{ weatherData.weather[0].description }} </span>
    </div>
    <div id="underline"></div>
    <div class="body">
      <p>Температура</p>
      <span>Текущая:</span> <span>{{ weatherData.main.temp }}</span>
      <br />
      <span>Ощущается:</span> <span>{{ weatherData.main.feels_like }}</span>
      <br />
    </div>
    <div id="underline"></div>
    <div class="footer">
      <p>Ветер</p>
      <span>Скорость: </span><span>{{ weatherData.wind.speed }} м/с</span>
      <br />
      <span>Направление: </span><span>{{ weatherData.wind.deg }} °</span>
      <br />
      <span>Порывы: </span><span>{{ weatherData.wind.gust }} м/с</span>
    </div>
  </div>
</template>

<script>
import Cloud_D from "../imgs/Cloud.png";
import Cloud_N from "../imgs/Cloud.png";
import Clouds_N from "../imgs/Clouds.png";
import Clouds_D from "../imgs/Clouds.png";
import Clear_D from "../imgs/Clear.png";
import Clear_N from "../imgs/Moon.png";
import PartlyCloud_D from "../imgs/PartlyCloud.png";
import PartlyCloud_N from "../imgs/CloudNight.png";
import Rain_D from "../imgs/Rain.png";
import Rain_N from "../imgs/MediumRainN.png";
import SmallRain_D from "../imgs/SmallRain.png";
import SmallRain_N from "../imgs/SmallRainN.png";

//import MediumRain_D from "../imgs/MediumRain.png";

export default {
  name: "weather-item",
  data() {
    return {
      weatherIcons: [
        {
          import: PartlyCloud_D,
          codeName: ["облачно с прояснениями", "переменная облачность"],
          dayAndNight: ["04d", "03d"],
        },
        {
          import: PartlyCloud_N,
          codeName: ["облачно с прояснениями", "переменная облачность"],
          dayAndNight: ["04n", "03n"],
        },
        { import: Cloud_D, codeName: ["небольшая облачность"], dayAndNight: ["02n"] },
        { import: Cloud_N, codeName: ["небольшая облачность"], dayAndNight: ["02d"] },
        { import: Clouds_D, codeName: ["пасмурно"], dayAndNight: ["04d"] },
        { import: Clouds_N, codeName: ["пасмурно"], dayAndNight: ["04n"] },
        { import: Clear_D, codeName: ["ясно"], dayAndNight: ["01d"] },
        { import: Clear_N, codeName: ["ясно"], dayAndNight: ["01n"] },
        { import: SmallRain_D, codeName: ["небольшой дождь"], dayAndNight: ["10d"] },
        { import: SmallRain_N, codeName: ["небольшой дождь"], dayAndNight: ["10n"] },
        { import: Rain_D, codeName: ["дождь"], dayAndNight: ["10d"] },
        { import: Rain_N, codeName: ["дождь"], dayAndNight: ["10n"] },
      ],
      daysOfWeeak: [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ],
      currentDayName: "",
      weatherIcon: "",
    };
  },
  methods: {
    changeWeatherIcon() {
      const iconName = this.weatherData.weather[0].description;
      const dayOrNight = this.weatherData.weather[0].icon;
      var weatherIconObj = this.weatherIcons.find(
        (obj) =>
          obj.codeName.find((cd) => cd === iconName) &&
          obj.dayAndNight.find((obj) => obj === dayOrNight)
      );

      if (weatherIconObj == undefined) {
        console.log(dayOrNight);
        return;
      }
      this.weatherIcon = weatherIconObj.import;
    },
    getDayOfWeek() {
      const currentDate = new Date(this.weatherData.dt_txt);
      const curreDay = currentDate.getDay();
      this.currentDayName = this.daysOfWeeak[curreDay];
    },
  },
  props: {
    weatherData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.changeWeatherIcon();
    this.getDayOfWeek();
  },
  updated() {
    this.changeWeatherIcon();
    this.getDayOfWeek();
  },
};
</script>

<style scoped>
#weatherIcon {
  margin-left: 5px;
  height: 50px;
  width: 50px;
}
.container {
  border: 1px solid rgb(77, 77, 77);
  width: 250px;
  height: 430px;
  padding: 10px;
  font-size: 23px;
}
.title {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.body span {
  display: inline-block;
  margin-top: 10px;
}
.body > span:nth-child(3) {
  margin-left: 60px;
}
.body > span:nth-child(3):after {
  content: "\2103";
  margin-left: 5px;
  font-size: 20px;
}
.body > span:nth-child(6):after {
  content: "\2103";
  margin-left: 5px;
  font-size: 20px;
}
.body > span:nth-child(9):after {
  content: "\2103";
  margin-left: 5px;
  font-size: 20px;
}
.body > span:nth-child(12):after {
  content: "\2103";
  margin-left: 5px;
  font-size: 20px;
}
.body > span:nth-child(6) {
  margin-left: 37px;
}
.body > span:nth-child(9) {
  margin-left: 91px;
}
.body > span:nth-child(12) {
  margin-left: 100px;
}
.body p {
  text-align: center;
}
#underline {
  border: 0.5px solid rgb(77, 77, 77);
  width: 200px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
}
.footer p {
  text-align: center;
}
.footer > span {
  display: inline-block;
  margin-top: 10px;
}
.footer > span:nth-child(3) {
  margin-left: 63px;
}
.footer > span:nth-child(6) {
  margin-left: 31px;
}
.footer > span:nth-child(9) {
  margin-left: 73px;
}
</style>
