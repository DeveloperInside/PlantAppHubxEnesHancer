import { ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import { appStyles } from 'theme'

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground source={{}} style={appStyles.container}>
      <SafeAreaView style={appStyles.container}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Background
