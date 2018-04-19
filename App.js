/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
} from 'react-native';
import { Appsee } from './Appsee';
import SearchPage from './SearchPage';


export default class App extends Component<{}> {
  render() {
    Appsee.start("0a475f053c7c4f98a45e5c09435febd4");
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
