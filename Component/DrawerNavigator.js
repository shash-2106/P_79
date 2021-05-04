
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSidebarMenu from './CustomSidebarMenu';
import {AppTabNavigator} from './TabNavigator';
import SettingScreen from '../screens/SettingScreen';
import MyDonations from '../screens/MyDonationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},
Settings:{screen:SettingScreen},
MyDonations:{screen:MyDonations}},

    
    {contentComponent:CustomSidebarMenu},
    {initialRouteName:'Home'

}) 