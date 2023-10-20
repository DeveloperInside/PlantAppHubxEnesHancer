import { StyleSheet } from 'react-native'
import { sizes } from 'theme'

export const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: sizes.huge,
    marginVertical: sizes.small,
  },
  paragraph: {
    marginTop: sizes.mini,
    opacity: 0.7,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    paddingHorizontal: sizes.huge,
  },
  caption: {
    marginTop: sizes.medium,
    marginBottom: sizes.mini,
    textAlign: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  },
})
