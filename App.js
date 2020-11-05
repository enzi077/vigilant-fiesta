import React, { useCallback, useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View, Text, TouchableHighlight, Dimensions, RefreshControl} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Weather from './components/Weather'

//const screenHeight=(Dimensions.get('window').height)
const screenWidth=(Dimensions.get('window').width)
const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function App() {
    const mapAPIkey='your_mapbox_api_key'

    const [searchText,setSearchText]=useState('')
    const [mapData,setMapData]=useState([])
    const [ticker,setTicker]=useState(false)
    const [refreshing,setRefreshing]=useState(false)

    useEffect(()=>{
        if(ticker){
            callMapApi()
            setMapData([])
        }
        setTicker(false)
    },[ticker])
    
    const onRefresh = useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    const callMapApi=async()=>{
        const query=searchText
        if(query!==null || query!==undefined){
            const mapAPIcall=`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?types=place&limit=1&access_token=${mapAPIkey}`
            const response=await fetch(mapAPIcall)
            const data=await response.json()
            setMapData(data)
        }
        setSearchText('')
    }

    const tickerUpd=()=>{
        setTicker(!ticker)
    }

    const {features}=mapData
  return (
    <SafeAreaView>
        <View style={styles.app__mainView}>
            <View style={styles.app__header}>
                <Text style={styles.app__headerText}>Weatherman</Text>
            </View>
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            >
                <TextInput
                    onChangeText={(text)=>setSearchText(text)}
                    value={searchText}
                    placeholder='Search a place...'
                    placeholderTextColor='#f2f2f2'
                    style={styles.app__textInput}
                />
                <View style={styles.app__inputBtn}>
                    <TouchableHighlight
                        activeOpacity={0.5}
                        underlayColor='#ff66a3'
                    >
                        <Button 
                            disabled={!searchText} 
                            title='Search' 
                            onPress={tickerUpd}
                            color='#ff0066'
                        />
                    </TouchableHighlight>
                </View>
                {
                    features &&
                    <Weather
                        fullName={features[0].place_name}
                        longitude={features[0].center[0]}
                        latitude={features[0].center[1]}
                    />
                }
            </ScrollView>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app__header:{
      backgroundColor:'#1a1a1a',
      paddingTop:20
  },
  app__mainView:{
      //minHeight:(screenHeight),
      height:'100%',
      backgroundColor:'#333333',
  },
  app__textInput:{
      height: 40, 
      borderColor: 'gray',
      borderWidth: 2,
      borderRadius:5,
      color:'#f2f2f2',
      padding:10,
      margin:10
  },
  app__headerText:{
      color:'#f2f2f2',
      fontWeight:'bold',
      fontSize:30,
      margin:20,
  },
  app__inputBtn:{
      borderRadius:5,
      margin:10,
      width:(screenWidth/2),
  },
});
