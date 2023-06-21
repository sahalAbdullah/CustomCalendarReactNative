import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {monthDates, year, month} from '../utils/month';
import MainHeader from './MainHeader';
const Calendar = () => {
  const today = new Date();

  const todayMonth = today.getMonth() + 1; // Months are zero-based, so add 1
  const todayDate = today.getDate() + 6;
  const todayYear = today.getFullYear();
  console.log(`Today's date is: ${todayMonth}/${todayDate}/${todayYear}`);
  const [selectedMonth, setSelectedMonth] = useState<number>(todayMonth);
  const [selectedYear, setSelectedYear] = useState<string>(
    todayYear.toString(),
  );
  const [calendarId, selectedIdCalendar] = useState<number>(todayDate);
  let dummyData = [...monthDates];
  const handleMonthSelect = () => {
    // console.log(selectedMonth);
  };
  const handleYearSelect = () => {
    // console.log(selectedYear);
  };
  const pressHandler = (id: number) => {
    selectedIdCalendar(id);
  };
  // const endHandler = () => {
  //   dummyData = [...monthDates];
  // };
  const buttonPressHandler = () => {
    setSelectedMonth(todayMonth);
    setSelectedYear(todayYear.toString());
    selectedIdCalendar(todayDate);
  };
  function getMonthInfo(
    year: number,
    month: number,
  ): {startDay: number; totalDays: number} {
    const date = new Date(year, month - 1, 1); // Subtract 1 from the month since it's zero-based
    const startDay = date.getDay(); // Starting weekday (0 for Sunday, 1 for Monday, etc.)
    const lastDay = new Date(year, month, 0).getDate(); // Get the last day of the month
    return {startDay, totalDays: lastDay};
  }
  const yearSelect = parseInt(selectedYear);
  const monthSelect = selectedMonth;
  let {startDay, totalDays} = getMonthInfo(yearSelect, monthSelect);
  console.log('Starting weekday:', startDay); // Starting weekday: 3 (Wednesday)
  if (startDay === 0) {
    startDay = 6;
  }
  if (startDay > 1) {
    for (let i = 1; i <= startDay - 1; i++) {
      dummyData.unshift({id: i, date: 0});
    }
  }
  return (
    <View>
      <View style={styles.monthSelectList}>
        <View>
          <SelectList
            setSelected={(val: number) => setSelectedMonth(val)}
            data={month}
            save="key"
            onSelect={() => handleMonthSelect()}
            placeholder="Select Month"
            search={false}
          />
        </View>
        <View style={{position: 'relative'}}>
          <SelectList
            setSelected={(val: string) => setSelectedYear(val)}
            data={year}
            save="value"
            onSelect={() => handleYearSelect()}
            placeholder="Select Year"
            search={false}
          />
        </View>
      </View>
      <View>
        {selectedMonth || selectedYear ? (
          <View
            style={{
              backgroundColor: 'white',
              margin: 2,
              elevation: 2,
              paddingBottom: 19,
            }}>
            <MainHeader />
            <FlatList
              data={dummyData}
              numColumns={7}
              contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={item => (
                <View>
                  {item.item.date === 0 ? (
                    <View
                      style={{
                        width: 51,
                        height: 35,
                        margin: 2,
                      }}></View>
                  ) : (
                    <View>
                      {item.item.date <= totalDays ? (
                        <Pressable
                          onPress={() => pressHandler(item.item.id)}
                          style={{
                            width: 51,
                            height: 55,
                            margin: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor:
                              item.item.id === calendarId
                                ? 'lightblue'
                                : 'white',
                            borderColor:
                              item.item.id === calendarId ? '#000' : '#EBEBEB',
                            borderRadius: 8,
                            borderWidth: 0.8,
                          }}>
                          {/* <Text>RA</Text> */}
                          <Text>{item.item.date}</Text>
                        </Pressable>
                      ) : null}
                    </View>
                  )}
                </View>
              )}
            />
          </View>
        ) : null}
      </View>
      <View>
        {selectedMonth && selectedYear && calendarId ? (
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              padding: 10,
              backgroundColor: 'lightblue',
            }}>
            <Text>Selected Date: </Text>
            <Text>{calendarId ? calendarId - 6 : null} -</Text>
            <Text> {selectedMonth} -</Text>
            <Text> {selectedYear}</Text>
          </View>
        ) : null}
        <View>
          <Pressable
            onPress={buttonPressHandler}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#ccc' : '#007bff',
                opacity: pressed ? 0.25 : 1,
              },
              {
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                elevation: 8,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12,
              },
            ]}>
            <Text style={styles.appButtonText}>For Today's Date</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default Calendar;
const styles = StyleSheet.create({
  monthSelectList: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    flexDirection: 'row',
  },
  appButtonText: {
    fontSize: 10,
    color: '#fff',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
