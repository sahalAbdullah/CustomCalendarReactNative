import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';

import {
  calendarDates,
  calendarYears,
  calendarMonths,
  monthDates,
} from '../utils/month';

const Calendars = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const flatListRef = useRef<FlatList<any>>(null);
  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.floor(offsetY / 40); // Adjust the value based on your item height
    setCurrentMonth(index);
    console.log('Index Here : ', index);
  };

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({index});
    // setCurrentIndex(index);
    console.log('My Index Here: ', index);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
      <View
        style={{
          paddingTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          margin: 7,
        }}>
        <View style={{padding: 10}}>
          <FlatList
            onScroll={handleScroll}
            scrollEventThrottle={16}
            style={{width: 70, height: 120}}
            data={calendarMonths}
            keyExtractor={(item, index) => `${item.key.toString()} ${index}`}
            showsVerticalScrollIndicator={false}
            renderItem={item => {
              return (
                <View
                  style={{
                    width: 30,
                    height: 40,
                    borderBottomWidth: 1,
                    borderColor: item.item.key === 13 ? 'white' : '#ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: item.item.key === currentMonth + 1 ? 18 : 13,
                      fontWeight:
                        item.item.key === currentMonth + 1 ? 'bold' : 'normal',
                    }}>
                    {item.item.value}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{padding: 10}}>
          <FlatList
            style={{width: 60, height: 100}}
            data={calendarDates}
            keyExtractor={(item, index) => `${item.id.toString()} ${index}`}
            renderItem={item => {
              return (
                <View
                  style={{
                    width: 30,
                    height: 40,
                    borderBottomWidth: 1,
                    borderColor: item.item.id === 32 ? 'white' : '#ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item.item.date}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{padding: 10}}>
          <FlatList
            style={{width: 60, height: 100}}
            data={calendarYears}
            keyExtractor={(item, index) => `${item.id.toString()} ${index}`}
            renderItem={item => {
              return (
                <View
                  style={{
                    width: 30,
                    height: 40,
                    borderBottomWidth: 1,
                    borderColor: item.item.id === 102 ? 'white' : '#ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item.item.value}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calendars;
