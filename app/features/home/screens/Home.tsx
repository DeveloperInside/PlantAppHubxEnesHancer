import { Image, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import { Box, Typo } from 'components'
import { images } from 'assets'
import { appStyles, sizes } from 'theme'
import { PremiumCard, SearchBar } from '../components'
import { styles } from './home.styles'

const Home = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <Box flex={1}>
        <Box style={styles.headerContainer}>
          <Box style={styles.headerLeafContainer}>
            <Image
              source={images.home_header_leaf_left}
              style={styles.headerLeaf}
              resizeMode="contain"
            />
            <Image
              source={images.home_header_leaf_right}
              style={styles.headerLeaf}
              resizeMode="contain"
            />
          </Box>
          <Box space={sizes.medium} style={styles.headerContent}>
            <Box space={sizes.slim}>
              <Typo>Hi, plant lover!</Typo>
              <Typo variant="home_welcome">Good Afternoon! ⛅</Typo>
            </Box>
            <SearchBar />
          </Box>
        </Box>
        <Box flex={1}>
          <PremiumCard />
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default Home
