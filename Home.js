import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';

export default class Home extends Component {
  constructor() {
    super();
    this.state = { 
      active: "home",
      load: false,
      data: ""
    }
  }

  componentDidMount(){
    let data= fetch('https://id.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Muhammadiyah').then((resp)=> {
    resp.json().then((res) =>{
      this.setState({
        load: true,
        data: res.query.pages[7018].title
      })
     })
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            {this.state.active === "home" ? (
              <View style={styles.active}>
                <Button onPress={() => this.setState({active: "home"})} color="transparent" title="Home" />
              </View>
              ):(
                <View style={styles.navigation}>
                  <Button onPress={() => this.setState({active: "home"})} color="transparent" title="Home" />
                </View>
              )
            }
            {this.state.active === "tokoh" ? (
              <View style={styles.active}>
                <Button onPress={() => this.setState({active: "tokoh"})} color="transparent" title="Tokoh" />
              </View>
            ):(
              <View style={styles.navigation}>
                <Button onPress={() => this.setState({active: "tokoh"})} color="transparent" title="Tokoh" />
              </View>
            )}
            {this.state.active === "sejarah" ? (
              <View style={styles.active}>
                <Button onPress={() => this.setState({active: "sejarah"})} color="transparent" title="Sejarah" />
              </View>
            ):(
              <View style={styles.navigation}>
                <Button onPress={() => this.setState({active: "sejarah"})} color="transparent" title="Sejarah" />
              </View>
            )}
            {this.state.active === "perkembangan" ? (
              <View style={styles.active}>
                <Button onPress={() => this.setState({active: "perkembangan"})} color="transparent" title="Perkembangan" />
              </View>
            ):(
              <View style={styles.navigation}>
                <Button onPress={() => this.setState({active: "perkembangan"})} color="transparent" title="Perkembangan" />
              </View>
            )}
          </View>
        {this.state.load === false ? (
          <View>
            <ActivityIndicator size="large" />
          </View>
        ):(
          <View>
            <Text>{this.state.data}</Text>
          </View>
          )} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  active:{
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  header:{
    display: "flex",
    flexDirection: 'row',
    paddingVertical: 3 ,
    justifyContent: "space-around",
    position: 'absolute',
    bottom: 0,
    height: 40,
    width: "100%",
    backgroundColor: "blue",
    color: "white"
  },
});
