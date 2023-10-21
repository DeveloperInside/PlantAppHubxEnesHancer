import { View, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from 'assets'
import { Button, Typo } from 'components'
import { Background, PaginationDots } from '../components'
import { styles } from './onboarding.styles'
import { LinearGradient } from 'react-native-gradients'

const OnboardingStepThree = () => {
  const [brushLeftPosition, setBrushLeftPosition] = useState(100)

  const handleBrushPosition = (event: {
    nativeEvent: { layout: { x: number; width: number } }
  }) => {
    const layout = event.nativeEvent.layout
    setBrushLeftPosition(layout.x)
  }

  const gradientColors = [
    { offset: '0%', color: '#ffffff', opacity: '0' },
    { offset: '50%', color: '#ffffff', opacity: '1' },
  ]

  return (
    <Background>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Typo variant="header">Get plant </Typo>
          <View onLayout={handleBrushPosition}>
            <Typo variant="header_bold">care guides</Typo>
          </View>
        </View>
        <Image
          source={icons.brush}
          style={[styles.brush, { left: brushLeftPosition, width: 152 }]}
        />
      </View>
      <ImageBackground
        style={styles.image}
        resizeMode="contain"
        source={images.onboarding_3_bg}>
        <Image source={images.onboarding_3_artwork} style={styles.artwork} />
        <View style={styles.whiteGradient}>
          <LinearGradient angle={270} colorList={gradientColors} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Continue" />
          <PaginationDots current={2} total={3} style={styles.paginationDots} />
        </View>
      </ImageBackground>
    </Background>
  )
}

export default OnboardingStepThree
