import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, Icon, Typo } from 'components'
import { styles } from './premiumCard.styles'
import { LinearGradient } from 'react-native-gradients'
import MaskedView from '@react-native-masked-view/masked-view'

const PremiumCard = ({ onPress }: { onPress: () => void }) => {
  const gradientColors = [
    { offset: '20%', color: '#E5C990', opacity: '1' },
    { offset: '100%', color: '#E4B046', opacity: '1' },
  ]

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Box row>
        <Icon name="premium_mail" size={36} style={styles.mail} />
        <Box flex={1}>
          <Box flex={1}>
            <Box style={styles.gradientBg}>
              <MaskedView
                maskElement={
                  <Typo variant="upgrade_card_header" color="white">
                    FREE Premium Available
                  </Typo>
                }>
                <LinearGradient
                  angle={0}
                  colorList={gradientColors}></LinearGradient>
              </MaskedView>
            </Box>
          </Box>
          <Box flex={1}>
            <Box style={styles.gradientBg}>
              <MaskedView
                maskElement={
                  <Typo variant="upgrade_card_desc">
                    Tap to upgrade your account!
                  </Typo>
                }>
                <LinearGradient
                  angle={0}
                  colorList={gradientColors}></LinearGradient>
              </MaskedView>
            </Box>
          </Box>
        </Box>
        <Icon name="premium_arrow_right" size={24} style={styles.mail} />
      </Box>
    </TouchableOpacity>
  )
}

export default PremiumCard
