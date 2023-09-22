<template>
    <div class="weather-container">
        <div>
            <span>Ваш город:</span><span>{{city.name}}</span>
        </div>
        <div class="info__country">
            <span>Ваша странна:</span><span>{{city.country}}</span>
        </div>  
        <div v-if="city.state != undefined">
            <span>Ваша Область | Штаты:</span><span>{{city.state}}</span>
        </div> 
        <div id="underline"></div>
        <span class="warning" v-if="!this.showWarn">Выберите в верху дату прогноза</span>
        <weather-list :data="weatherData" v-if="this.showWarn"></weather-list>
    </div>
</template>

<script>
    export default {
        name: "weatherInfo",
        props: {
            city: {
                type: Object,
                required: true,
            },
            weatherData: Array,
            showWarn: Boolean,
        },
       
    }
</script>

<style  scoped>
.weather-container{
    margin: 0 50px;
    margin-top: 30px;
    height: 600px;
    font-family: 'Bebas Neue';
    font-size: 30px;
    text-align: left;
    padding: 10px;
    color: rgba(199, 194, 194, 0.534);
    background-color: rgba(151, 148, 148, 0.116);
    white-space: nowrap;
}
.weather-container>div:nth-child(1)>span:nth-child(2) {
    margin-left:175px;
}
.weather-container>div:nth-child(2)>span:nth-child(2) {
    margin-left:139px;
}
.weather-container>div:nth-child(3)>span:nth-child(2) {
    margin-left: 50px;
}
#underline{
    margin: 10px 0;
    border: 0.5px solid rgb(77, 77, 77);
}
.warning{
    text-align: center;
}
</style>