import { View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { icons, images } from 'assets'
import { Button, Typo } from 'components'
import { Background, PaginationDots } from '../components'
import { styles } from './onboarding.styles'

const OnboardingStepTwo = () => {
  return (
    <Background>
      <View style={styles.headerContainer}>
        <Typo variant="header">
          Take a photo to <Typo variant="header_bold">identify</Typo>
          {'\n'}the plant!
        </Typo>
        <Image source={icons.brush} style={styles.brush} />
      </View>
      <ImageBackground
        style={styles.image}
        resizeMode="contain"
        source={images.onboarding_2_bg}>
        <View style={styles.buttonContainer}>
          <Button title="Get Started" />
          <PaginationDots current={1} total={3} style={styles.paginationDots}/>
        </View>
      </ImageBackground>
    </Background>
  )
}

export default OnboardingStepTwo
