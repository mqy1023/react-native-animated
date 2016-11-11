import React, { Component } from 'react';

import { View, StyleSheet, Animated, Dimensions, Easing } from 'react-native';

const { height } = Dimensions.get('window');
// 7、Stagger React Native Animations with Animated.stagger
export default class animatedBasic7 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animatedValue1: new Animated.Value(0),
      animatedValue2: new Animated.Value(0),
      animatedValue3: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.stagger(300, [
      Animated.timing(this.state.animatedValue1, {
        toValue: height,
        duration: 1000,
        easing: Easing.bounce
      }),
      Animated.timing(this.state.animatedValue2, {
        toValue: height,
        duration: 3000,
        easing: Easing.bounce
      }),
      Animated.timing(this.state.animatedValue3, {
        toValue: 500,
        duration: 400,
        easing: Easing.bounce
      }),
    ]).start();
  }

  render() {
    const animatedStyle1 = {
      height: this.state.animatedValue1
    };
    const animatedStyle2 = {
      height: this.state.animatedValue2
    };
    const animatedStyle3 = {
      height: this.state.animatedValue3
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle1]} />
        <Animated.View style={[styles.box, animatedStyle2]} />
        <Animated.View style={[styles.box, animatedStyle3]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    flex: 1,
    backgroundColor: '#333',
    marginHorizontal: 5
  }
});
