import React, { Component } from "react";
import {Text, FlatList, View} from 'react-native';
import Styles from "./Styles"


// --------------------------------------------
// ListArticle
// --------------------------------------------
class ListArticle extends Component {

    constructor(props){
        super(props);
    }
 
    //
    render(){ 

        //
        const {articles} = this.props;

        //
        return (   
        <View style={Styles.container}>
            
            {/*  */}
            <Text style={{padding: 30}} onPress={() => this.props.setPage("categories")}>
                Back to Categories
            </Text>

            {/*  */}
            <FlatList 
                data={articles}
                renderItem={({item, index}) => (
                <View style={[Styles.div2, {borderBottomWidth: 1}]}>

                    {/* (1) */}
                    <View style={{flexDirection: "row"}} >

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

                        {index+1}

                        </Text>

                        {/*  */}
                        <Text style={Styles.title} onPress={() => this.props.setArticle(item.id)}> 
                            {item.title.rendered} 
                        </Text>

                    </View>

                    {/* (2) */}
                    <View style={{flexDirection: "row"}} >
                        <Text style={[Styles.simpleText, {marginRight: 10}]}>
                            Released in {new Date(item.date).toLocaleDateString("en")}  
                        </Text>
                    </View>


                </View>
                )}
            /> 

        </View>
        );
    }
}

//
export default ListArticle;


 
