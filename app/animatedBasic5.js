import React, { Component } from 'react';

import { View, StyleSheet, Text, Animated, Easing } from 'react-native';

// 5、Animate Rotation with React Native Interpolate
export default class animatedBasic5 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.bounce
    }).start();
  }

  render() {
    const interpolateRotation = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} >
          <Text style={styles.text}>spinner</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
});
