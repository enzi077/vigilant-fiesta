import React from 'react'
import {  View } from 'react-native'
import TemperatureCard from './cards/TemperatureCard'
import HumidityCard from './cards/HumidityCard'
import UviCard from './cards/UviCard'
import DescriptionCard from './cards/DescriptionCard'

const WeatherReport = ({current}) => {
    
    return (
        <View>
            {current &&
                <View>
                    <TemperatureCard temp={current.temp} feelsLike={current.feels_like}/>
                    <HumidityCard humidity={current.humidity}/>
                    <UviCard uvi={current.uvi}/>
                    <DescriptionCard desc={current.weather[0].description}/>
                </View>
            }
        </View>
    )
}

export default WeatherReport