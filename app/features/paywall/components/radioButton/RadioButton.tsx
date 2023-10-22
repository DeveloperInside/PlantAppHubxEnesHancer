import React from 'react'
import { Box } from 'components'
import { styles } from './radioButton.styles'
import { IRadioButton } from './radioButton.types'

const RadioButton = ({ isSelected }: IRadioButton) => {
  return (
    <Box row>
      <Box style={isSelected ? styles.selected : styles.notSelected}>
        <Box></Box>
      </Box>
    </Box>
  )
}

export default RadioButton
