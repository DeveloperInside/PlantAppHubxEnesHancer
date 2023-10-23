/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import {
  homeList,
  onboardingList,
  stacksList,
} from './screenLinking/screenLinking'

export type OnboardingParamList = {
  [K in onboardingList]: undefined
}

export type HomeParamList = {
  [K in homeList]: undefined
}

export type RootStackParamList = {
  [K in stacksList]: NavigatorScreenParams<HomeParamList & OnboardingParamList>
}

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>

export type OnboardingNavigationProp = CompositeScreenProps<
  NativeStackScreenProps<OnboardingParamList>,
  NativeStackScreenProps<RootStackParamList>
>

export type HomeNavigationProp = CompositeScreenProps<
  NativeStackScreenProps<HomeParamList>,
  NativeStackScreenProps<RootStackParamList>
>
