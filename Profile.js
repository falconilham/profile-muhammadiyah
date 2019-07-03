import React, {Component} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

export default class Profile extends Component {
    constructor(props) {
      super(props);
      this.state={
          name: this.props.navigation.state.params.name,
          image: this.props.navigation.state.params.image,
          deskripsi: this.props.navigation.state.params.deskripsi,
          list: this.props.navigation.state.params.list,
          other_deskripsi: this.props.navigation.state.params.other_deskripsi,
      }
    }
    static navigationOptions = {
        title: 'Profile'
       };
    render() {
        return (
                <ScrollView>
                    <View style={styles.container}>
                    <Text style={{textAlign: "center", color: "black"}}>{this.state.name}</Text>
                    <View style={{flex: 2,alignItems: "center", marginHorizontal: 10}}>
                        <Image style={styles.imageThumbnail} source={this.state.image} {...this.props} />
                    </View>
                    <Text style={{alignItems: "center", textAlign: "justify", color: "black"}}>{this.state.deskripsi}</Text>
                    </View>
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imageThumbnail:{
        height: 180,
        width: 160,
        maxWidth: "100%",
        maxHeight: "100%"
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: "column",
      },
})