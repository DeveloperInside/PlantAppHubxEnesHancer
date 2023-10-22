import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { stacks } from './screenLinking/screenLinking'
import { RootStackParamList } from './navigation.types'

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={stacks.onboardingStack.name}
          component={stacks.onboardingStack.component}
        />
        <Stack.Screen
          name={stacks.homeStack.name}
          component={stacks.homeStack.component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
