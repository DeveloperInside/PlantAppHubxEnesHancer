import { hexTransparencies } from 'helpers/hexTransparencies'
import { StyleSheet } from 'react-native'
import { colors, sizes } from 'theme'

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.grey_light + hexTransparencies[85],
  },
  headerContent: {
    paddingHorizontal: sizes.huge,
    paddingTop: sizes.tiny,
    paddingBottom: sizes.regular,
  },
  headerLeafContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeaf: {
    width: 100,
    height: 75,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
  },
  questionContainer: {
    paddingLeft: sizes.huge,
  },
  categoriesContainer: {
    gap: sizes.medium,
  },
  categoriesColumn: {
    justifyContent: 'space-between',
  },
})
