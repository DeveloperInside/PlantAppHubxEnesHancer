import { TextInput } from 'react-native'
import React from 'react'
import { Box, Icon } from 'components'
import { BlurView } from '@react-native-community/blur'
import { sizes } from 'theme'
import { styles } from './searchBar.styles'

const SearchBar = () => {
  return (
    <Box style={styles.wrapper}>
      <BlurView blurType="light" blurAmount={10}>
        <Box row space={sizes.small} style={styles.container}>
          <Icon name="search" size={sizes.xlarge} />
          <TextInput placeholder='Search for plants' style={styles.input} />
        </Box>
      </BlurView>
    </Box>
  )
}

export default SearchBar
