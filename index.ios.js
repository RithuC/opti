import { ToggleContainer, ToggleItem } from 'deco-ride-share-demo'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Cahoots extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Cahoots!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <ToggleContainer
          value={(this.state && this.state.option) || 'One'}
          options={['One', 'Two', 'Three', 'Four']}
          style={{padding: 10}}
          orientation={"horizontal"}
          spacing={10}
          renderItem={(option, active) => (
            <ToggleItem
              option={option}
              active={active}
              onPress={() => this.setState({option})}
              color={"rgb(189,16,224)"}
              backgroundColor={"rgb(255,255,255)"}
              borderColor={"rgba(231,231,231,1)"}
              activeColor={"rgba(255,255,255,1)"}
              activeBackgroundColor={"rgb(74,144,226)"}
              borderRadius={2}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Cahoots', () => Cahoots);
