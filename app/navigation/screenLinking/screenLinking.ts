import Home from 'features/home/screens/Home'
import {
  OnboardingStepOne,
  OnboardingStepThree,
  OnboardingStepTwo,
} from 'features/onboarding/screens'
import Paywall from 'features/paywall/screens/Paywall'
import HomeStack from 'navigation/stacks/HomeStack'
import OnboardingStack from 'navigation/stacks/OnboardingStack'

export enum onboardingList {
  onboardingStepOne = 'onboardingStepOne',
  onboardingStepTwo = 'onboardingStepTwo',
  onboardingStepThree = 'onboardingStepThree',
  paywall = 'paywall',
}

export enum homeList {
  home = 'home',
  paywall = 'paywall',
}

export enum stacksList {
  onboardingStack = 'onboardingStack',
  paywallStack = 'paywallStack',
  homeStack = 'homeStack',
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
    },
  },
  home: {
    home: {
      name: homeList.home,
      component: Home,
    },
    paywall: {
      name: homeList.paywall,
      component: Paywall,
    },
  },
}

export const stacks = {
  onboardingStack: {
    name: stacksList.onboardingStack,
    component: OnboardingStack,
  },
  homeStack: {
    name: stacksList.homeStack,
    component: HomeStack,
  },
}
