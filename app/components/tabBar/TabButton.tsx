import React from 'react'
import Box from 'components/box/Box'
import Icon from 'components/icon/Icon'
import Typo from 'components/typo/Typo'
import { styles } from './tabBar.styles'
import { ITabButton } from './tabBar.types'
import { colors } from 'theme'
import { TouchableOpacity } from 'react-native'

const TabButton = ({ title, icon, selected, onPress }: ITabButton) => {
  return (
    <Box row>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name={icon} size={26} />
        <Typo center variant="tab_button" color={selected ? colors.primary : colors.grey}>
          {title}
        </Typo>
      </TouchableOpacity>
    </Box>
  )
}

export default TabButton
