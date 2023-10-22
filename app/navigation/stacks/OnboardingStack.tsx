import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from 'navigation/screenLinking/screenLinking'
import { OnboardingParamList } from 'navigation/navigation.types'

const Stack = createNativeStackNavigator<OnboardingParamList>()

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={screens.onboarding.onboardingStepOne.name}
        component={screens.onboarding.onboardingStepOne.component}
      />
      <Stack.Screen
        name={screens.onboarding.onboardingStepTwo.name}
        component={screens.onboarding.onboardingStepTwo.component}
      />
      <Stack.Screen
        name={screens.onboarding.onboardingStepThree.name}
        component={screens.onboarding.onboardingStepThree.component}
      />
      <Stack.Screen
        name={screens.onboarding.paywall.name}
        component={screens.onboarding.paywall.component}
      />
    </Stack.Navigator>
  )
}

export default OnboardingStack
