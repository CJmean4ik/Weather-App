import { createApp } from 'vue';
import App from './App.vue';

import Input from './components/UI/Input';
import Button from './components/UI/Button';
import List from './components/СityList';
import WeatherInfo from './components/CityWeatherInfo';
import WeatherList from './components/WeatherList';
import WeatherItem from './components/WeatherItem';
import Loader from './components/UI/Loader';

createApp(App)
.component(Input.name,Input)
.component(Loader.name,Loader)
.component(Button.name,Button)
.component(List.name,List)
.component(WeatherInfo.name,WeatherInfo)
.component(WeatherList.name,WeatherList)
.component(WeatherItem.name,WeatherItem)
.mount('#app')
