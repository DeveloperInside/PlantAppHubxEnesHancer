import React from 'react'
import { BlurView } from '@react-native-community/blur'
import { styles } from './features.styles'
import { Box, Icon, Typo } from 'components'
import { colors, sizes } from 'theme'
import { IFeatures } from './features.types'

const FeaturesCard = ({ title, subtitle, icon }: IFeatures) => {
  return (
    <Box style={styles.container}>
      <Box style={styles.overlay} />
      <BlurView style={styles.blurView} blurType='materialDark' blurAmount={10}>
        <Box space={sizes.medium}>
          <Box row>
            <Box style={styles.iconContainer}>
              <Box style={styles.iconOverlay} />
              <Icon name={icon} size={18} />
            </Box>
          </Box>
          <Box space={sizes.tiny}>
            <Typo variant="features_card_title" color={colors.white}>
              {title}
            </Typo>
            <Typo
              variant="features_card_subtitle"
              color={colors.white}
              opacity={0.7}>
              {subtitle}
            </Typo>
          </Box>
        </Box>
      </BlurView>
    </Box>
  )
}

export default FeaturesCard
