import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import descIcon from '../../assets/policy.png'
import Avatar from '../../utils/Avatar'
import capitalize from '../../utils/capitalize'

const screenWidth=(Dimensions.get('window').width)
const DescriptionCard = ({desc}) => {
    return (
        <View style={styles.descriptionCard}>
            <Avatar image={descIcon} style={styles.descriptionCard__avatar}/>
            <View style={styles.descriptionCard__view}>
                <Text style={{color:'#333333',fontWeight:'bold'}}>Description: </Text>
                <Text>{capitalize(desc)}</Text>
            </View>
        </View>
    )
}

export default DescriptionCard

const styles = StyleSheet.create({
    descriptionCard:{
        display:'flex',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'#E5E5E5',
        maxWidth:screenWidth,
        margin:5,
        padding: 10
    },
    descriptionCard__avatar:{
        position:'absolute',
        top:2,
    },
    descriptionCard__view:{
        position:'absolute',
        left:'50%',
        display:'flex',
        flexDirection:'row'
    }
})
