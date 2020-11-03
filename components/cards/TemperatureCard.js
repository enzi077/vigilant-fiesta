import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import tempIcon from '../../assets/thermometer.png'
import Avatar from '../../utils/Avatar'

const screenWidth=(Dimensions.get('window').width)
const TemperatureCard = ({temp,feelsLike}) => {
    return (
        <View style={styles.tempCard}>
            <Avatar image={tempIcon} style={styles.tempCard__avatar}/>
            <View style={styles.tempCard__view}>
                <Text style={{color:'#333333'}}><strong>Current:</strong> {temp} °C</Text>
                <Text style={{color:'#333333'}}><strong>Feels Like:</strong> {feelsLike} °C</Text>
            </View>
        </View>
    )
}

export default TemperatureCard

const styles = StyleSheet.create({
    tempCard:{
        display:'flex',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'#E5E5E5',
        maxWidth:screenWidth,
        margin:5,
        padding: 10
    },
    tempCard__avatar:{
        position:'absolute',
        top:2,
    },
    tempCard__view:{
        position:'absolute',
        left:'50%',
    }
})
