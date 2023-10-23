import { ImageBackground } from 'react-native'
import React from 'react'
import { ICategoryCard } from './categoryCard.types'
import { Box, Typo } from 'components'
import { styles } from './categoryCard.styles'

const CategoryCard = ({ title, image }: ICategoryCard) => {
  return (
    <Box style={styles.container}>
      <ImageBackground source={{ uri: image }} style={styles.content}>
        <Typo variant='category_title'>{title}</Typo>
      </ImageBackground>
    </Box>
  )
}

export default CategoryCard
