import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import humidityIcon from '../../assets/humidity.png'
import Avatar from '../../utils/Avatar'

const HumidityCard = ({humidity}) => {
    return (
        <View style={styles.humidityCard}>
            <Avatar image={humidityIcon} style={styles.humidityCard__avatar}/>
            <View style={styles.humidityCard__view}>
                <Text style={{color:'#333333'}}><strong>Humidity:</strong> {humidity} %</Text>
            </View>
        </View>
    )
}

export default HumidityCard

const styles = StyleSheet.create({
    humidityCard:{
        display:'flex',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'#E5E5E5',
        maxWidth:580,
        margin:5,
        padding: 10
    },
    humidityCard__avatar:{
        position:'absolute',
        top:2,
    },
    humidityCard__view:{
        position:'absolute',
        left:'50%',
    }
})
