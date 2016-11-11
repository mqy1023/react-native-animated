import React, { Component } from 'react';

import { View, StyleSheet, Animated, Dimensions, Easing } from 'react-native';

const { height } = Dimensions.get('window');
// 7、Stagger React Native Animations with Animated.stagger
export default class animatedBasic8 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animatedValue1: new Animated.Value(0),
      animatedValue2: new Animated.Value(1),
    };
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.animatedValue1, {
        toValue: 300,
        duration: 3000,
        easing: Easing.bounce
      }),
      Animated.spring(this.state.animatedValue2, {
        toValue: 3,
      }),
    ]).start();
  }

  render() {
    const animatedStyles = {
      transform: [
        { translateY: this.state.animatedValue1 },
        { scale: this.state.animatedValue2 }
      ]
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#333'
  }
});
