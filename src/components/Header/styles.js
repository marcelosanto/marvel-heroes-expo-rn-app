import { StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    width: '100%',
    top: 0,
    marginTop: StatusBar.currentHeight,
    marginBottom: 0,
    flexDirection: 'row',
  },
})
