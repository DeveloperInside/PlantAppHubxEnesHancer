import React from 'react'
import { ActivityIndicator } from 'react-native'
import { colors } from 'theme'
import Box from 'components/box/Box'
import { styles } from './loading.styles'

const Loading = () => {
  return (
    <Box style={styles.container}>
      <ActivityIndicator color={colors.primary} size="large" />
    </Box>
  )
}

export default Loading
