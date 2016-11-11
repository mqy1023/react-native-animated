import React, { Component } from 'react';

import { View, StyleSheet, Animated, Text, TouchableWithoutFeedback } from 'react-native';

// 2、Animate style of a React Native View with Animated.spring
export default class animatedBasic2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(1),
    };
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  handlePressIn() { // 点击按钮
    Animated.spring(this.state.animatedValue, {
      toValue: .5
    }).start();
  }

  handlePressOut() { // 松开点击按钮
    Animated.spring(this.state.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start();
  }

  render() {
    const animatedStyle = { transform: [{ scale: this.state.animatedValue }] };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <Animated.View style={[styles.button, animatedStyle]}>
            <Text style={styles.text}>Press me</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
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
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFF'
  }
});
