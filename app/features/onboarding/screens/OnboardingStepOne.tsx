import React from 'react'
import { Text, ImageBackground } from 'react-native'
import { images } from 'assets'
import { Button, Typo, Background, Box } from 'components'
import { styles } from './onboarding.styles'
import { colors } from 'theme'
import { OnboardingNavigationProp } from 'navigation/navigation.types'
import { onboardingList } from 'navigation/screenLinking/screenLinking'

const OnboardingStepOne = ({ navigation }: OnboardingNavigationProp) => {
  
  const handleNavigation = () => {
    navigation.navigate(onboardingList.onboardingStepTwo)
  }

  return (
    <Background source={images.onboarding_one_bg} >
      <Box style={styles.headerContainer}>
        <Typo variant="header">
          Welcome to <Typo variant="header_bold">PlantApp</Typo>
        </Typo>
        <Typo variant="paragraph" style={styles.paragraph}>
          Identify more than 3000+ plants and{'\n'}88% accuracy.
        </Typo>
      </Box>
      <ImageBackground
        style={styles.image}
        resizeMode="contain"
        source={images.onboarding_1_bg}
      />
      <Box style={styles.buttonContainer}>
        <Button title="Get Started" onPress={handleNavigation} />
        <Typo variant="caption" color={colors.caption} style={styles.caption}>
          By tapping next, you are agreeing to PlantID{'\n'}
          <Text style={styles.underline}>Terms of Use</Text> &{' '}
          <Text style={styles.underline}>Privacy Policy.</Text>
        </Typo>
      </Box>
    </Background>
  )
}

export default OnboardingStepOne
