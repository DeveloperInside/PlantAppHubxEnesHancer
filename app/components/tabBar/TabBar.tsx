import React from 'react'
import Box from 'components/box/Box'
import Icon from 'components/icon/Icon'
import { Alert, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './tabBar.styles'
import TabButton from './TabButton'

const TabBar = () => {
  const handleScreenDemo = () => {
    Alert.alert('Demo', 'Screen not initialized.')
  }

  return (
    <Box>
      <Box style={styles.divider} />
      <Box row style={{ justifyContent: 'space-between' }}>
        <Box row>
          <TabButton icon="home_selected" title="Home" selected />
          <TabButton
            icon="diagnose"
            title="Diagnose"
            onPress={handleScreenDemo}
          />
        </Box>
        <Box flex={1}>
          <TouchableOpacity onPress={handleScreenDemo}>
            <Icon name="scan_button" size={74} style={styles.scanButton} />
          </TouchableOpacity>
        </Box>
        <Box row>
          <TabButton
            icon="my_garden"
            title="My Garden"
            onPress={handleScreenDemo}
          />
          <TabButton
            icon="profile"
            title="Profile"
            onPress={handleScreenDemo}
          />
        </Box>
      </Box>
      <SafeAreaView />
    </Box>
  )
}

export default TabBar
