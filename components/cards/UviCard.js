import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import sunIcon from '../../assets/sun.png'
import Avatar from '../../utils/Avatar'

const screenWidth=(Dimensions.get('window').width)
const UviCard = ({uvi}) => {
    return (
        <View style={styles.uviCard}>
            <Avatar image={sunIcon} style={styles.uviCard__avatar}/>
            <View style={styles.uviCard__view}>
                <Text style={{color:'#333333'}}><strong>UV Index:</strong> {uvi}</Text>
            </View>
        </View>
    )
}

export default UviCard

const styles = StyleSheet.create({
    uviCard:{
        display:'flex',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'#E5E5E5',
        maxWidth:screenWidth,
        margin:5,
        padding: 10,
    },
    uviCard__avatar:{
        position:'absolute',
        top:2,
    },
    uviCard__view:{
        position:'absolute',
        left:'50%',
    }
})
