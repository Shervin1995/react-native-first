/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { thisExpression } from '@babel/types';
import React from 'react';
import { 
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,FlatList,
  Button,
  useColorScheme,
  View,Image,
  ImageBackground,
  TextInput
} from 'react-native';

import data from './app/data/data.json'
  
class App extends React.Component {  

    constructor(props){
      super(props);
      this.backToList = this.backToList.bind(this);
      this.goToDetails = this.goToDetails.bind(this);
      
      this.state = {
        detail: false,
        singleDetails: {}
      }

    }

    goToDetails(id){  
      this.setState({
        detail: !this.state.detail,
        singleDetails: data.find(x => x.id == id)
      });
    }

    backToList(){
      this.setState({
        detail: !this.state.detail
      });
    }

    render(){
      const {singleDetails, detail} = this.state;
      
      // ---------------------------------
      // details
      // ---------------------------------
      if (detail) {
        return( 
          <View style={{padding: 30, alignItems: "flex-start"}}> 
            
            <Text style={styles.simpleText}>
              number: {singleDetails.id}  
            </Text>
            <Text 
              style={styles.title} 
            > 
              {singleDetails.name}
            </Text>
            <Text style={styles.simpleText}>
              movie: {singleDetails.class}  
            </Text>
            <Text style={styles.simpleText}>
              play time: {singleDetails.time}
            </Text>
            <Text style={[styles.simpleText, {
              color: "blue",
              borderTopWidth: 1,
              paddingTop: 20, 
              marginTop: 20,
              width: 300
              }]} onPress={this.backToList}>
              Back to List
            </Text> 
          </View>
        )
      }

      // ---------------------------------
      // list
      // ---------------------------------
      if (!detail) {
        return (   
          <View style={styles.container}>
            
            <FlatList 
              data={data}
              renderItem={({item}) => {
                return(
                  <View style={[styles.div2, {borderBottomWidth: 1}]}>
                    <View style={{
                      flexDirection: "row", 
                      }} >
                      <Text style={{
                        fontWeight: "700",
                        fontSize: 24, 
                        paddingLeft: 18,
                        paddingTop: 8,
                        marginRight: 10, 
                        width: 50,
                        height: 50,
                        borderRadius: 30, 
                        borderColor: "black", 
                        borderWidth: 3, 
                        color: "black"
                        }}>
                        {item.id}
                      </Text>
                      <Text style={styles.title} onPress={() => this.goToDetails(item.id)}> 
                        {item.name} 
                      </Text>
                    </View>
                    <View style={{
                      flexDirection: "row", 
                      }} >
                      <Text style={[styles.simpleText, {marginRight: 10}]}>
                        movie: {item.class}  - 
                      </Text>
                      <Text style={styles.simpleText}> 
                        play time: {item.time}
                      </Text>
                    </View>
                  </View>
                )
              }}
            /> 

          </View>
        );
      }

    }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'lightgray',
    paddingHorizontal: 20,
  },
  div2: {
    // borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    alignItems: 'flex-start'
  },
  title: { 
    fontSize: 32,
    fontWeight: '700',
    color: 'black',
    paddingBottom: 10
  },
  simpleText: { 
    // backgroundColor: 'white',
    fontSize: 24,
    color: 'gray',
    paddingVertical: 3
  }
});

export default App;
