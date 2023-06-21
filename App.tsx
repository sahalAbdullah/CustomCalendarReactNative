import React, {useEffect} from 'react';
import {SafeAreaView, View, Button, StyleSheet} from 'react-native';
import Calendar from './components/Calendar';
import {PermissionsAndroid} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Calendars from './components/Calendars';

import {
  requestUserPermission,
  notificationListener,
} from './utils/notificationServies';
function App(): JSX.Element {
  const pressHandler = () => {
    console.log('Sahal');
  };
  // useEffect(() => {
  //   requestUserPermission();
  //   notificationListener();
  //   PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  //   );
  // }, []);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        {/* <Calendar /> */}
        <Calendars />
      </View>
    </SafeAreaView>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    marginTop: 5,
  },
});
