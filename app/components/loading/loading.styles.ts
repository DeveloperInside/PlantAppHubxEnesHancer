import { hexTransparencies } from 'helpers/hexTransparencies'
import { StyleSheet } from 'react-native'
import { appStyles, colors } from 'theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg_secondary + hexTransparencies[30],
    ...StyleSheet.absoluteFillObject,
    ...appStyles.centerItems,
  },
})
