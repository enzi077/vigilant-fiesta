import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View, Text, TouchableHighlight} from 'react-native';
import Weather from './components/Weather'

export default function App() {
    const mapAPIkey='pk.eyJ1IjoicHVsc2F0aW5nLXBob3RvbiIsImEiOiJja2d3aWd6NjAwYWtuMnNwOG0zMzY2OTM4In0.wLLD-mftFdNcC6lGdwKG6w'

    const [searchText,setSearchText]=useState('')
    const [mapData,setMapData]=useState([])
    const [ticker,setTicker]=useState(false)

    useEffect(()=>{
        if(ticker){
            callMapApi()
            setMapData([])
        }
        setTicker(false)
    },[ticker])

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
            <TextInput
                onChangeText={(text)=>setSearchText(text)}
                value={searchText}
                placeholder='Search a place...'
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
      minHeight:'100vh',
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
      width:'50vw',
  }
});
