import React, {useEffect, useState}from 'react'
import { SafeAreaView, StyleSheet, Text, View,} from 'react-native'
import TemperatureChart from './cards/TemperatureChart'
import WeatherReport from './WeatherReport'

const Weather = ({fullName,longitude,latitude}) => {
    const weatherAPIcall=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=d5d0165f95862f84d093bf5f8079811a`

    const [data,setData]=useState([])

    useEffect(()=>{
        if(longitude!==undefined && latitude!==undefined){
            callWeatherApi()
        }
    },[])

    const callWeatherApi=async()=>{
        const response=await fetch(weatherAPIcall)
        const data=await response.json()
        setData(data)
    }
    const {current,daily}=data
    return (
        <SafeAreaView>
            <View style={styles.weather__view}>
                <Text style={{color:'#333333',fontWeight:'bold'}}>{fullName}</Text>
            </View>
            <TemperatureChart daily={daily}/>
            <WeatherReport
                current={current}
            />
        </SafeAreaView>
    )
}

export default Weather

const styles = StyleSheet.create({
    weather__view:{
        display:'flex',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'#E5E5E5',
        maxWidth:580,
        margin:5,
        padding: 10
    }
})
