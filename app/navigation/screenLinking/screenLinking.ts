import OnboardingStepOne from 'features/onboarding/screens/OnboardingStepOne'
import OnboardingStepThree from 'features/onboarding/screens/OnboardingStepThree'
import OnboardingStepTwo from 'features/onboarding/screens/OnboardingStepTwo'
import OnboardingStack from 'navigation/stacks/OnboardingStack'

export enum onboardingList {
  onboardingStepOne = 'onboardingStepOne',
  onboardingStepTwo = 'onboardingStepTwo',
  onboardingStepThree = 'onboardingStepThree',
}

export enum stacksList {
  onboardingStack = 'onboardingStack',
}

export const screens = {
  onboarding: {
    onboardingStepOne: {
      name: onboardingList.onboardingStepOne,
      component: OnboardingStepOne,
    },
    onboardingStepTwo: {
      name: onboardingList.onboardingStepTwo,
      component: OnboardingStepTwo,
    },
    onboardingStepThree: {
      name: onboardingList.onboardingStepThree,
      component: OnboardingStepThree,
    },
  },
}

export const stacks = {
  onboardingStack: {
    name: stacksList.onboardingStack,
    component: OnboardingStack,
  },
}
