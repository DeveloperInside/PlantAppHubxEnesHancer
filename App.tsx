import { View } from 'react-native'
import React from 'react'
import OnboardingStepOne from 'features/onboarding/screens/OnboardingStepOne'
import OnboardingStepTwo from 'features/onboarding/screens/OnboardingStepTwo'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <OnboardingStepOne /> */}
      <OnboardingStepTwo />
    </View>
  )
}

export default App
