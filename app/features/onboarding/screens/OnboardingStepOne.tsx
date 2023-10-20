import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { images } from 'assets'
import { Button, Typo } from 'components'
import { Background } from '../components'
import { styles } from './onboarding.styles'
import { colors } from 'theme'

const OnboardingStepOne = () => {
  return (
    <Background>
      <View style={styles.headerContainer}>
        <Typo variant='header'>
          Welcome to <Typo variant='header_bold'>PlantApp</Typo>
        </Typo>
        <Typo variant='paragraph' style={styles.paragraph}>
          Identify more than 3000+ plants and{'\n'}88% accuracy.
        </Typo>
      </View>
      <ImageBackground
        style={styles.image}
        resizeMode="contain"
        source={images.onboarding_1_bg}
      />
      <View style={styles.buttonContainer}>
        <Button title="Get Started" />
        <Typo variant="caption" color={colors.caption} style={styles.caption}>
          By tapping next, you are agreeing to PlantID{'\n'}
          <Text style={styles.underline}>Terms of Use</Text> &{' '}
          <Text style={styles.underline}>Privacy Policy.</Text>
        </Typo>
      </View>
    </Background>
  )
}

export default OnboardingStepOne