import React, { useState } from 'react'
import { Background, Box, Button, Icon, Typo } from 'components'
import { images } from 'assets'
import { styles } from './paywall.styles'
import { colors, sizes } from 'theme'
import { FeaturesCard, PremiumOptionsCard } from '../components'
import { SafeAreaView, ScrollView } from 'react-native'
import { ICardConfigure } from './paywall.types'
import { RootNavigationProp } from 'navigation/navigation.types'
import { stacks } from 'navigation/screenLinking/screenLinking'

const Paywall = ({ navigation }: { navigation: RootNavigationProp }) => {
  const [selectedPurchaseOption, setSelectedPurchaseOption] = useState<1 | 2>(2)

  const cardConfigures: ICardConfigure[] = [
    { icon: 'scanner', title: 'Unlimited', subtitle: 'Plant Identify' },
    { icon: 'speedometer', title: 'Faster', subtitle: 'Process' },
    { icon: 'leaves', title: 'Detailed', subtitle: 'Plant care' },
  ]

  const purchaseButtonText = {
    1: 'Purchase 1 month',
    2: 'Try free for 3 days',
  }

  const handlePurchase = () => {
    navigation.navigate(stacks.homeStack.name)
  }

  return (
    <Box style={{ flex: 1 }}>
      <Background source={images.paywall_asset_1}>
        <Box style={styles.close}>
          <Box style={styles.closeWrapper} />
          <Icon name={'close'} size={8} />
        </Box>
        <Box style={styles.topContainer}>
          <Typo variant={'header_large'} color={colors.white}>
            PlantApp{' '}
            <Typo variant="header_light" color={colors.white}>
              Premium
            </Typo>
          </Typo>
          <Typo
            variant="subheader"
            color={colors.white}
            style={styles.subheader}>
            Access All Features
          </Typo>
        </Box>
        <Box>
          <ScrollView horizontal>
            <Box row space={sizes.mini} p={sizes.huge}>
              {cardConfigures.map((cardConfigure, index) => (
                <Box key={index}>
                  <FeaturesCard
                    icon={cardConfigure.icon}
                    title={cardConfigure.title}
                    subtitle={cardConfigure.subtitle}
                  />
                </Box>
              ))}
            </Box>
          </ScrollView>
        </Box>
      </Background>
      <Box style={styles.bottomContainer}>
        <Box space={sizes.medium}>
          <PremiumOptionsCard
            title="1 Month"
            desc="$2.99/month, auto renewable"
            onPress={() => setSelectedPurchaseOption(1)}
            isSelected={selectedPurchaseOption === 1}
          />
          <PremiumOptionsCard
            title="1 Year"
            desc="First 3 days free, then $529,99/year"
            badgeText="Save 50%"
            onPress={() => setSelectedPurchaseOption(2)}
            isSelected={selectedPurchaseOption === 2}
          />
        </Box>
        <Button
          title={purchaseButtonText[selectedPurchaseOption]}
          style={styles.purchaseButton}
          onPress={handlePurchase}
        />
        <Box space={sizes.xsmall}>
          <Typo
            variant="caption_small"
            color={colors.white}
            opacity={0.5}
            center>
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </Typo>
          <Typo variant="caption" color={colors.white} center opacity={0.5}>
            Terms • Privacy • Restore
          </Typo>
        </Box>
        <SafeAreaView />
      </Box>
    </Box>
  )
}

export default Paywall
