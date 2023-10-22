import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from 'navigation/screenLinking/screenLinking'
import { HomeParamList } from 'navigation/navigation.types'

const Stack = createNativeStackNavigator<HomeParamList>()

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={screens.home.home.name}
        component={screens.home.home.component}
      />
      <Stack.Screen
        name={screens.home.paywall.name}
        component={screens.home.paywall.component}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
