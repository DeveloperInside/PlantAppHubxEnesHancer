import React from 'react'
import { ImageBackground, Image } from 'react-native'
import { icons, images } from 'assets'
import { Button, Typo, Background, Box } from 'components'
import { PaginationDots } from '../components'
import { styles } from './onboarding.styles'
import { OnboardingNavigationProp } from 'navigation/navigation.types'
import { onboardingList } from 'navigation/screenLinking/screenLinking'

const OnboardingStepTwo = ({ navigation }: OnboardingNavigationProp) => {
  const handleNavigation = () => {
    navigation.navigate(onboardingList.onboardingStepThree)
  }

  return (
    <Background source={images.onboarding_two_bg}>
      <Box style={styles.headerContainer}>
        <Typo variant="header">
          Take a photo to <Typo variant="header_bold">identify</Typo>
          {'\n'}the plant!
        </Typo>
        <Image source={icons.brush} style={styles.brush} />
      </Box>
      <ImageBackground
        style={styles.image}
        resizeMode="contain"
        source={images.onboarding_2_bg}>
        <Box style={styles.buttonContainer}>
          <Button title="Continue" onPress={handleNavigation} />
          <PaginationDots current={1} total={3} style={styles.paginationDots} />
        </Box>
      </ImageBackground>
    </Background>
  )
}

export default OnboardingStepTwo
