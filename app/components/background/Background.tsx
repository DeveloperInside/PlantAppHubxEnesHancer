import { ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import { appStyles } from 'theme'
import { IBackground } from './background.types'

const Background = ({ source, children, style }: IBackground) => {
  return (
    <ImageBackground source={source} style={[appStyles.container, style]}>
      <SafeAreaView style={appStyles.container}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Background
