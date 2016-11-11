import React, { Component } from 'react';

import { View, StyleSheet, Animated, Text, Easing, TouchableOpacity } from 'react-native';

// 8、Animate Multiple Animations at the Same Time with Animated.parallel
export default class animatedBasic8 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0),
    };
  }
  componentWillMount() {
    this._value = 0;
    this.state.animatedValue.addListener(({ value }) => {
      this._value = value;
    });
    this.frontInterpolate = this.state.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    });
    this.backInterpolate = this.state.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    });
  }

  _flipCard() {
    if (this._value >= 90) {
      Animated.timing(this.state.animatedValue, {
        toValue: 0,
        duration: 1000,
        tension: 10
      }).start();
    } else {
      Animated.timing(this.state.animatedValue, {
        toValue: 180,
        duration: 1000,
        tension: 10
      }).start();
    }
  }

  render() {
    // 改变rotateY，rotateX来设定转轴
    const frontAnimatedStyles = {
      transform: [
        { rotateX: this.frontInterpolate },
      ]
    };
    const backAnimatedStyles = {
      transform: [
        { rotateX: this.backInterpolate }
      ]
    };
    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyles]}>
            <Text style={[styles.flipText]}>
              flipping front text
            </Text>
          </Animated.View>
          <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyles]}>
            <Text style={[styles.flipText]}>
              flipping back text
            </Text>
          </Animated.View>
        </View>
        <TouchableOpacity onPress={() => this._flipCard()}>
          <Text>click me to Flip!</Text>
        </TouchableOpacity>
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
  flipCard: {
    width: 150,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0
  },
  flipText: {
    color: 'white',
    textAlign: 'center'
  }
});
