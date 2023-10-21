/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import {
  CompositeScreenProps,
} from '@react-navigation/native'
import { onboardingList, stacksList } from './screenLinking/screenLinking'

export type OnboardingParamList = {
  [K in onboardingList]: undefined
}

export type RootStackParamList = {
  [K in stacksList]: undefined
}

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>

export type OnboardingNavigationProp = CompositeScreenProps<
  NativeStackScreenProps<OnboardingParamList>,
  NativeStackScreenProps<RootStackParamList>
>
