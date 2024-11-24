import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      {}
      <View style={styles.textWrapper}>
        <Text style={styles.textStyle}>Teks di Tengah</Text>
      </View>

      {}
      <View style={styles.boxRow}>
        <View style={[styles.box, { backgroundColor: '#4CAF50' }]} />
        <View style={[styles.box, { backgroundColor: '#FF5722' }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#D3D3D3', 
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
  },
  boxRow: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'flex-start', 
    paddingTop: 20, 
  },
  box: {
    width: 100,
    height: 100, 
  },
});

export default App;
