import React, { Component } from "react";
import { Button, View} from "react-native";



//
class FrontPage extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <View> 
        
        {/* (1) header */}
        <View>

        <Button 
          title="Categories"
          onPress={() => this.props.setPage("categories")} 
          color="green"
          style={{padding: 30}} 
          />

          <Button 
          title="Archive"
          onPress={() => this.props.setPage("archive")} 
          color="green"
          style={{padding: 10}} 
          />

          <Button 
          title="Courses"
          onPress={() => this.props.setPage("courses")} 
          color="green"
          style={{padding: 10}} 
          />

        </View>

        {/* (2) dashboard overview */}
        {/* num of all categories and articles */}

      </View> 
    )
  }
}


//
export default FrontPage



      