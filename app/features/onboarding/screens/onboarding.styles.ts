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
    justifyContent: 'flex-end',
  },
  artwork: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 185,
    height: 185,
    top: 0,
    right: 0,
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
  brush: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 136,
    right: 30,
    top: 18
  },
  paginationDots: {
    alignItems: 'center',
    marginTop: sizes.massive,
    marginBottom: sizes.small,
  },
  whiteGradient: {
    position: 'absolute',
    width: '100%',
    height: '25%',
    bottom:0
  }
})
