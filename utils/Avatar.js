import React from 'react'
import { View } from 'react-native'

const Avatar = ({image}) => {
    return (
        <View>
            <img src={image} alt='image' style={{height:'50px',width:'50px'}}/>
        </View>
    )
}

export default Avatar