import { View, Text } from 'react-native'
import React from 'react'
import { Box, Typo } from 'components'
import { colors } from 'theme'
import { styles } from './discountBadge.styles'

const DiscountBadge = ({ title }: { title: string }) => {
  return (
    <Box style={styles.container}>
      <Typo variant="discount" color={colors.white}>
        {title}
      </Typo>
    </Box>
  )
}

export default DiscountBadge
