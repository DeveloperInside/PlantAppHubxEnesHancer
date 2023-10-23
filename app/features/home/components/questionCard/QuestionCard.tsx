import { ImageBackground, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { IQuestionCard } from './questionCard.types'
import { Typo } from 'components'
import { styles } from './questionCard.styles'
import { colors } from 'theme'

const QuestionCard = ({ title, subtitle, image_uri, uri }: IQuestionCard) => {
  const handleOpenLink = () => {
    Linking.openURL(uri)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleOpenLink}>
      <ImageBackground source={{ uri: image_uri }} style={styles.content}>
        <Typo numberOfLines={2} variant="question_title" color={colors.white}>
          <Typo variant="question_subtitle" color={colors.white}>
            {subtitle},{' '}
          </Typo>
          {title}
        </Typo>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default QuestionCard
