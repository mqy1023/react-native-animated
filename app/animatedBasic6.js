import React, { Component } from 'react';

import { View, StyleSheet, Animated, Easing } from 'react-native';

// 6、Animate a Sequence of React Native Animations with Animated.sequence
export default class animatedBasic6 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animatedValue1: new Animated.Value(0),
      animatedValue2: new Animated.Value(1)
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.animatedValue1, {
        toValue: 150,
        duration: 1000,
        easing: Easing.bounce
      }),
      Animated.spring(this.state.animatedValue2, {
        toValue: 3,
      }),
      Animated.timing(this.state.animatedValue1, {
        toValue: 0,
        duration: 2000,
      }),
      Animated.spring(this.state.animatedValue2, {
        toValue: .5,
      })
    ]).start();
  }

  render() {
    const animatedStyle = {
      transform: [
        { translateY: this.state.animatedValue1 },
        { scale: this.state.animatedValue2 }
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
