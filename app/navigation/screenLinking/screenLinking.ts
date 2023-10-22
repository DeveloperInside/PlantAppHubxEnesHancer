import {
  OnboardingStepOne,
  OnboardingStepThree,
  OnboardingStepTwo,
} from 'features/onboarding/screens'
import Paywall from 'features/paywall/screens/Paywall'
import OnboardingStack from 'navigation/stacks/OnboardingStack'

export enum onboardingList {
  onboardingStepOne = 'onboardingStepOne',
  onboardingStepTwo = 'onboardingStepTwo',
  onboardingStepThree = 'onboardingStepThree',
  paywall = 'paywall',
}

export enum stacksList {
  onboardingStack = 'onboardingStack',
  paywallStack = 'paywallStack',
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
    paywall: {
      name: onboardingList.paywall,
      component: Paywall,
    }
  },
}

export const stacks = {
  onboardingStack: {
    name: stacksList.onboardingStack,
    component: OnboardingStack,
  },
}
