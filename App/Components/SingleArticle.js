import React, { Component } from "react";
import {Linking, Text, ScrollView, View} from 'react-native'; 
import Styles from "./Styles"
import Wwebview from "./webview"


//
class SingleArticle extends Component{

  constructor(props){
    super(props)
  }

    render(){

      const {article} = this.props;

      //
        return(
          <ScrollView>
            <View style={{padding: 10, alignItems: "flex-start"}}> 
            
            {/* back */}
            <Text style={{padding: 30}} onPress={() => this.props.setPage("articles")}>
                Back to Articles
            </Text> 

            {/* title */}
            <Text style={Styles.title}> 
              {article.title.rendered}
            </Text>

            {/* read online */}
            <Text style={Styles.simpleText} onPress={()=> Linking.openURL(article.link)}> 
              Click to Read on juniorfrontend.ir 
            </Text> 

            <Text > 
              Videos and images is not displayed here
            </Text> 

            {/*  */}
            <View style={{marginTop: 50}}>
              <Wwebview html={article.content.rendered} /> 
            </View>


          </View>
          </ScrollView>
        )
    }
}

//
export default SingleArticle;