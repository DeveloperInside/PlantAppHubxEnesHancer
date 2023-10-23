import React from 'react'
import { screens } from 'navigation/screenLinking/screenLinking'
import { HomeParamList } from 'navigation/navigation.types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBar } from 'components'

const Tab = createBottomTabNavigator<HomeParamList>()

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // eslint-disable-next-line react/prop-types
      tabBar={props => (props?.state?.index == 0 ? <TabBar /> : null)}>
      <Tab.Screen
        name={screens.home.home.name}
        component={screens.home.home.component}
      />
      <Tab.Screen
        options={{ tabBarStyle: { display: 'none' } }}
        name={screens.home.paywall.name}
        component={screens.home.paywall.component}
      />
    </Tab.Navigator>
  )
}

export default HomeStack
