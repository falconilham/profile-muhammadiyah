import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
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
    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            {this.state.active === "home" ? (
              <View style={styles.active}>
                <TouchableOpacity onPress={() => this.setState({active: "home"})} color="transparent" title="Home" >
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Home</Text>
                  </View>
                </TouchableOpacity>
              </View>
              ):(
                <View style={styles.navigation}>
                  <TouchableOpacity onPress={() => this.setState({active: "home"})} color="transparent" title="Home" >
                    <View style={{paddingVertical: 5}}>
                      <Text style={{color: "white"}}>Home</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
            {this.state.active === "tokoh" ? (
              <View style={styles.active}>
                <TouchableOpacity onPress={() => this.setState({active: "tokoh"})} color="transparent" title="Tokoh">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Tokoh</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ):(
              <View style={styles.navigation}>
                <TouchableOpacity onPress={() => this.setState({active: "tokoh"})} color="transparent" title="Tokoh">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Tokoh</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            {this.state.active === "sejarah" ? (
              <View style={styles.active}>
                <TouchableOpacity onPress={() => this.setState({active: "sejarah"})} color="transparent" title="Sejarah">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Sejarah & Perkembangan</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ):(
              <View style={styles.navigation}>
                <TouchableOpacity onPress={() => this.setState({active: "sejarah"})} color="transparent" title="Sejarah">
                  <View style={{paddingVertical: 5}}>
                    <Text style={{color: "white"}}>Sejarah & Perkembangan</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        {this.state.active === "home" ? (
          <View style={{top : 0,width: "100%", height: 530}}>
            <WebView
                source={{html: "<p style='font-size: 35px;text-align: justify;text-indent: 50px;'>Muhammadiyah  adalah  sebuah  organisasi  Islam  yang besar  di  Indonesia.  Nama  organisasi  ini  diambil  dari  nama Nabi Muhammad  SAW.  sehingga  Muhammadiyah  juga  dapat dikenal   sebagai   orang-orang   yang   menjadi   pengikut   Nabi Muhammad   SAW.   Latar   belakang   KH   Ahmad   Dahlan memilih  nama  Muhammadiyah    yang  pada  masa  itu  sangat asing bagi telinga masyarakat umum adalah untuk memancing rasa  ingin  tahu dari  masyarakat,  sehingga  ada  celah  untuk memberikan penjelasan dan keterangan seluas-luasnya tentang agama  Islam  sebagaimana  yang  telah  diajarkan  Rasulullah SAW</p>" }}
            />
          </View>
        ):this.state.active === "tokoh" ? (
          <View>
            <Text>tokoh</Text>
          </View>
        ):(
          <View>
            <Text>sejarah</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: "row"
  },
  active:{
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  header:{
    flex: 2,
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
  color:{
    color: "white"
  }
});
