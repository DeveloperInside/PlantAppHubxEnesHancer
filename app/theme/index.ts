import { light } from './colors'
import { fonts } from './fonts'
import { appStyles } from './appStyles'
import { radiuses, sizes } from './sizes'

const theme = 'light'

const colors = theme === 'light' ? light : light

export { colors, fonts, appStyles, sizes, radiuses }
