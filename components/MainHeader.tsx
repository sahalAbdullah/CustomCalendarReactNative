import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const MainHeader = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.textShow}>
        <Text>M</Text>
      </View>
      <View style={styles.textShow}>
        <Text>T</Text>
      </View>
      <View style={styles.textShow}>
        <Text>W</Text>
      </View>
      <View style={styles.textShow}>
        <Text>T</Text>
      </View>
      <View style={styles.textShow}>
        <Text>F</Text>
      </View>
      <View style={styles.textShow}>
        <Text>S</Text>
      </View>
      <View style={styles.textShow}>
        <Text>S</Text>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  textShow: {
    width: 55,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
