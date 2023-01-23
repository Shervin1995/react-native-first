import React, { Component } from "react";
import {Text, FlatList, View} from 'react-native';
import Styles from "./Styles"


//
class ListCategories extends Component{

    constructor(props){
        super(props)
    }

    render(){

        const {categories} = this.props;

        //
        return(
            <View style={Styles.container}>
            
            {/*  */}
            <Text style={{padding: 30}} onPress={() => this.props.setPage("Home")}>
                Back to Home Page
            </Text>

            {/*  */}
            <FlatList 
                data={categories}
                renderItem={({item}) => (
                <View style={[Styles.div2, {borderBottomWidth: 1}]}>

                    {/* (1) */}
                    <View style={{flexDirection: "row"}} >
                        <Text style={Styles.title} onPress={() => this.props.setArticles(item.id)}> 
                            {item.name} 
                        </Text>
                    </View>
 
                </View>
                )}
            /> 

        </View>
        )
    }
}

//
export default ListCategories;