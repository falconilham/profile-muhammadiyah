import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./Home";
import Profile from "./Profile";
const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  Profile: {
   screen: Profile
  }
});
export default createAppContainer(Project);