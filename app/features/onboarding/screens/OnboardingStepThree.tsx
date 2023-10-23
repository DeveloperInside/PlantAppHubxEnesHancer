import React, { useState } from 'react'
import { ImageBackground, Image } from 'react-native'
import { icons, images } from 'assets'
import { Button, Typo, Background, Box } from 'components'
import { PaginationDots } from '../components'
import { styles } from './onboarding.styles'
import { LinearGradient } from 'react-native-gradients'
import { OnboardingNavigationProp } from 'navigation/navigation.types'
import { onboardingList } from 'navigation/screenLinking/screenLinking'

const OnboardingStepThree = ({ navigation }: OnboardingNavigationProp) => {
  const [brushLeftPosition, setBrushLeftPosition] = useState(100)

  const handleNavigation = () => {
    navigation.navigate(onboardingList.paywall)
  }

  const handleBrushPosition = (event: {
    nativeEvent: { layout: { x: number; width: number } }
  }) => {
    const layout = event.nativeEvent.layout
    setBrushLeftPosition(layout.x)
  }

  const gradientColors = [
    { offset: '0%', color: '#ffffff', opacity: '0' },
    { offset: '50%', color: '#ffffff', opacity: '1' },
    { offset: '100%', color: '#ffffff', opacity: '0' },
  ]

  return (
    <Background source={images.onboarding_three_bg}>
      <Box style={styles.headerContainer}>
        <Box style={{ flexDirection: 'row' }}>
          <Typo variant="header">Get plant </Typo>
          <Box onLayout={handleBrushPosition}>
            <Typo variant="header_bold">care guides</Typo>
          </Box>
        </Box>
        <Image
          source={icons.brush}
          style={[styles.brush, { left: brushLeftPosition, width: 152 }]}
        />
      </Box>
      <ImageBackground
        style={styles.image}
        resizeMode="contain"
        source={images.onboarding_3_bg}>
        <Image source={images.onboarding_3_artwork} style={styles.artwork} />
        <Box style={styles.whiteGradient}>
          <LinearGradient angle={270} colorList={gradientColors} />
        </Box>
        <Box style={styles.buttonContainer}>
          <Button title="Continue" onPress={handleNavigation} />
          <PaginationDots current={2} total={3} style={styles.paginationDots} />
        </Box>
      </ImageBackground>
    </Background>
  )
}

export default OnboardingStepThree
