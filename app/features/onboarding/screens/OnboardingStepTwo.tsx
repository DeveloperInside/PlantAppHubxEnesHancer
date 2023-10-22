import { View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { icons, images } from 'assets'
import { Button, Typo, Background } from 'components'
import { PaginationDots } from '../components'
import { styles } from './onboarding.styles'
import { OnboardingNavigationProp } from 'navigation/navigation.types'
import { onboardingList } from 'navigation/screenLinking/screenLinking'

const OnboardingStepTwo = ({ navigation }: OnboardingNavigationProp) => {
  
  const handleNavigation = () => {
    navigation.navigate(onboardingList.onboardingStepThree)
  }

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
          <Button title="Get Started" onPress={handleNavigation} />
          <PaginationDots current={1} total={3} style={styles.paginationDots} />
        </View>
      </ImageBackground>
    </Background>
  )
}

export default OnboardingStepTwo
