import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import {
  LineChart
} from "react-native-chart-kit"
import getDates from '../../utils/getDates'

const chartConfig = {
  backgroundGradientFrom: "#E5E5E5",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#E5E5E5",
  backgroundGradientToOpacity: 0,
  color: (opacity = 0.6) => `rgba(33, 33, 33, ${opacity})`,
  strokeWidth: 2,
};
const screenWidth=(Dimensions.get('window').width)
const TemperatureChart = ({daily}) => {
    
    const finalArray={labels:[],datasets:[],legend:['Minimum','Maximum']}
    
    const createNewData=()=>{
        let minTemp=[]
        let maxTemp=[]
        let dateArray=getDates()
        let datasetObj={}
        for(let j=0;j<2;j++){
            datasetObj={data:[],color:''}
            if(j===0){
                for(let i=7;i>=0;i--){
                    minTemp.push(daily[i].temp.min)
                }
                datasetObj.data=minTemp
                datasetObj.color=((opacity=1)=>`rgba(0, 188, 120,${opacity})`)
            }else{
                for(let i=7;i>=0;i--){
                    maxTemp.push(daily[i].temp.max)
                }
                datasetObj.data=maxTemp
                datasetObj.color=((opacity=0.32)=>`rgba(109, 13, 154,${opacity})`)
            }
            finalArray.datasets.push(datasetObj)
        }
        finalArray.labels=dateArray.reverse()
        return finalArray
    }
    
    return (
        <>
            {
                daily &&
                <View style={styles.tempChart}>
                    <LineChart
                        data={createNewData()}
                        height={220}
                        chartConfig={chartConfig}
                        yAxisSuffix=' °C'
                        width={screenWidth-20}
                    />
                </View>
            }
        </>
    )
}

export default TemperatureChart

const styles = StyleSheet.create({
    tempChart:{
        display:'flex',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'#E5E5E5',
        maxWidth:screenWidth,
        margin:5
    },
})
