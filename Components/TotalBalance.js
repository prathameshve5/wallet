import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ScrollView , FlatList, Text, View,Dimensions } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
  import { VictoryPie } from "victory-native";
  var Carousel = require('react-native-carousel');
  var width = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };
  const styles = {
    carouselContainer: {
      width: width,
      flex: 0.5,
      padding:10,
      alignItems: 'center',
     
      borderWidth:1,
        borderColor:'#E7EDF9'
    },
    container: {
      marginTop: 48,
      flex: 1
    },
    headerStyle: {
      fontSize: 24,
      textAlign: 'center',
      fontWeight: '100',
      marginBottom: 24
    },
    subHeader:{
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '100'

    },
    elementsContainer: {
        
      marginLeft: 24,
      marginRight: 24,
    },
    subjectInfo:{
      color:'black',
      borderRadius:6,
      padding:5,
      width:'100%',
      marginBottom:10,
      borderWidth:1,
        borderColor:'#E7EDF9',
  }
  }

  const Data=[
      {
          label:"prathamesh",
          amount:'6500',
          transactionType:'credit',
          message:'22nd of Every month',
          image:"https://randomuser.me/api/portraits/thumb/men/42.jpg",
          date:'Fri, 01 Feb'
      },
      {
        label:"prathamesh",
        amount:'6500',
        transactionType:'credit',
        message:'22nd of Every month',
        image:"https://randomuser.me/api/portraits/thumb/men/42.jpg",
        date:'Fri, 01 Feb'
    },
    {
      label:"prathamesh",
      amount:'6500',
      transactionType:'credit',
      message:'22nd of Every month',
      image:"https://randomuser.me/api/portraits/thumb/men/42.jpg",
      date:'Fri, 01 Feb'
  },
  {
    label:"prathamesh",
    amount:'6500',
    transactionType:'credit',
    message:'22nd of Every month',
    image:"https://randomuser.me/api/portraits/thumb/men/42.jpg",
    date:'Fri, 01 Feb'
}
  ]
 
class TotalBalance extends Component {
  render() {
    const graphicData =[
        { y: 10, x: '5%'},
        { y: 90, x: '90%'}
        ]
 const graphicColor = ['orange', 'blue']
    return (

        <View style={styles.container}>
       <Text style={styles.headerStyle}>Wallet</Text>
       <Carousel width={360}>
        <View style={styles.carouselContainer}>
          <Text>Page 1</Text>
          <Text style={{fontWeight:'bold', fontSize:18}}>RM. 25,0000</Text>
        </View>
        <View style={styles.carouselContainer}>
          <Text>Page 2</Text>
          <Text style={{fontWeight:'bold', fontSize:18}}>RM. 55,0000</Text>
        </View>
        <View style={styles.carouselContainer}>
          <Text>Page 3</Text>
          <Text style={{fontWeight:'bold', fontSize:18}}>RM. 45,0000</Text>
        </View>
        <View style={styles.carouselContainer}>
          <Text>Page 4</Text>
          <Text style={{fontWeight:'bold', fontSize:18}}>RM. 12,0000</Text>
        </View>
        <View style={styles.carouselContainer}>
          <Text>Page 5</Text>
          <Text style={{fontWeight:'bold', fontSize:18}}>RM. 45,0000</Text>
        </View>
        <View style={styles.carouselContainer}>
          <Text>Page 6</Text>
          <Text style={{fontWeight:'bold', fontSize:18}}>RM. 14,0000</Text>
        </View>
      </Carousel>
        <View style={[{flex: 2}, styles.elementsContainer]}>
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{flex:0.5,flexDirection:"row",justifyContent:'center'}}><Text style={styles.subHeader}>Total Balance Overview</Text></View>
                <View style={{flex: 3,flexDirection:'row'}} >          
                    <VictoryPie
                    data={graphicData}
                    colorScale={graphicColor}
                    width={250}
                    height={250}
                    innerRadius={50}
                    style={{
                    labels: {
                    fill: 'black', fontSize: 15, padding: 7,
                    }, }}
                    /> 
                    <View style={[{flexDirection:'column', justifyContent:"center"}]}>
                        <View style={[{flexDirection:'row'}]}><View style={{width: 20, height: 20, backgroundColor: 'orange', padding:5}} /><Text style={[{padding:5}]}>lable1</Text></View>
                        <View style={[{flexDirection:'row'}]}><View style={{width: 20, height: 20, backgroundColor: 'blue', padding:5}} /><Text style={[{padding:5}]}>lable2</Text></View>
                    </View>
                </View>
            </View>
            
        </View>
        <View style={[{flex: 4,marginTop:50}, styles.elementsContainer]}>
          <Text style={{padding:10, fontSize:18}}>Transaction History</Text>
            <FlatList
            data={Data}
            renderItem={({ item }) => (
              <View>
                <Text style={{padding:5}}>{item.date}</Text>
                <ListItem   style={styles.subjectInfo}>
                    <Avatar source={{uri: item.image}} />
                    <ListItem.Content >
                    <View>
            <Text style={{marginBottom:10}}>{item.label}</Text>
            <Text>{item.transactionType}</Text>
                    </View>
                    </ListItem.Content>
                    <ListItem.Content style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
                    <View style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
            <Text>{item.message}</Text>
            <Text>{item.amount}</Text>
                    </View>
                    </ListItem.Content>
                </ListItem> 
              </View>
               
              )}
            />
        </View>
        
            </View>
          
   
  
    
    );
  }
}
export default TotalBalance