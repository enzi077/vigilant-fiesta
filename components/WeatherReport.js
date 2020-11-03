import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Avatar from '../utils/Avatar'
import humidity from '../assets/humidity.png'
import description from '../assets/policy.png'
import temperature from '../assets/thermometer.png'
import sun from '../assets/sun.png'
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

const styles = StyleSheet.create({})
