import { hexTransparencies } from 'helpers/hexTransparencies'
import { StyleSheet } from 'react-native'
import { colors, sizes } from 'theme'

export const styles = StyleSheet.create({
  container: {},
  divider: {
    height: sizes.pico,
    backgroundColor: colors.text + hexTransparencies[10],
  },
  button: {
    width: 74,
    paddingTop: sizes.slim,
    paddingBottom: sizes.micro,
    alignItems: 'center',
  },
  scanButton: {
    alignSelf: 'center',
    marginTop: -sizes.huge,
  },
})
