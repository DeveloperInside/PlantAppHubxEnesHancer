import React from 'react'
import { Box, Typo } from 'components'
import { colors, sizes } from 'theme'
import { styles } from './premiumOptionsCard.styles'
import RadioButton from '../radioButton/RadioButton'
import DiscountBadge from '../discountBadge/DiscountBadge'
import { IPremiumOptionsCard } from './premiumOptionsCard.types'
import { TouchableOpacity } from 'react-native'

const PremiumOptionsCard = ({
  title,
  desc,
  isSelected,
  badgeText,
  ...rest
}: IPremiumOptionsCard) => {
  return (
    <TouchableOpacity {...rest}>
      <Box
        row
        space={sizes.small}
        style={[styles.container, isSelected && styles.selected]}>
        <Box>
          <RadioButton isSelected={isSelected} />
        </Box>
        <Box>
          <Typo variant="premium_title" color={colors.white}>
            {title}
          </Typo>
          <Typo variant="premium_desc" color={colors.white} opacity={0.7}>
            {desc}
          </Typo>
        </Box>
        {!!badgeText && <DiscountBadge title={badgeText} />}
      </Box>
    </TouchableOpacity>
  )
}

export default PremiumOptionsCard
