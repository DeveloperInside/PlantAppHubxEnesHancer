import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { stacks } from './screenLinking/screenLinking'
import { RootStackParamList } from './navigation.types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { STORAGE_KEYS } from 'constants/storageKeys'
import { useAppDispatch, useAppSelector } from 'services/redux/hooks'
import {
  selectHideOnboarding,
  setHideOnboarding,
} from 'services/redux/slices/hideOnboarding/hideOnboardingSlice'

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
  const dispatch = useAppDispatch()
  const isAppTourCompleted = useAppSelector(selectHideOnboarding)

  const handleAppTourCompleted = async () => {
    const appTourData = await AsyncStorage.getItem(
      STORAGE_KEYS.APP_TOUR_COMPLETED,
    )
    if (appTourData) dispatch(setHideOnboarding())
  }

  useEffect(() => {
    handleAppTourCompleted()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isAppTourCompleted ? (
          <Stack.Screen
            name={stacks.onboardingStack.name}
            component={stacks.onboardingStack.component}
          />
        ) : (
          <Stack.Screen
            name={stacks.homeStack.name}
            component={stacks.homeStack.component}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
