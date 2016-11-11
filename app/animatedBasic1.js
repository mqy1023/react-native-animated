import React, { Component } from 'react';

import { View, StyleSheet, Animated, Easing } from 'react-native';

// 1、Animate style of a React Native View with Animated.timing
export default class animatedBasic1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animatedValue1: new Animated.Value(1), // 初始化透明度opacity
      animatedValue2: new Animated.Value(150)
    };
  }

  componentDidMount() {
    // 效果一
    // Animated.timing(this.state.animatedValue1, {
    //   toValue: .3,
    //   duration: 2000,
    //   easing: Easing.bounce
    // }).start();
    // 效果二
    Animated.timing(this.state.animatedValue2, {
      toValue: 100,
      duration: 2000,
      easing: Easing.bounce
    }).start();
  }

  render() {
    // const animatedStyle = { opacity: this.state.animatedValue1 };
    const animatedStyle = { height: this.state.animatedValue2 };
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
