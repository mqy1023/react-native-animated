import React, { Component } from 'react';

import { View, StyleSheet, Animated, Easing } from 'react-native';

// 4、Animate Colors with React Native Interpolate
export default class animatedBasic4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.animatedValue, {
      toValue: 100,
      duration: 2000,
      easing: Easing.bounce
    }).start();
  }

  render() {
    const interpolateColor = this.state.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['rgb(0,0,0)', 'rgb(51,250,170)']
    });
    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        { translateY: this.state.animatedValue }
      ]
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
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
    width: 100,
    height: 100,
    backgroundColor: '#333'
  }
});
