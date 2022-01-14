import { StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 40,
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerCard: { marginVertical: 20, marginRight: 20 },
  image: { width: 180, height: 300, borderRadius: 25 },
  containerCardTitle: {
    marginTop: -100,
    marginLeft: 10,
  },
})
