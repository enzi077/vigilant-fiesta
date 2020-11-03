import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Avatar = ({image}) => {
    return (
        <View>
            <Image source={image} style={styles.avatar__image}/>
        </View>
    )
}

export default Avatar

const styles=StyleSheet.create({
    avatar__image:{
        height:50,
        width:50
    }
})