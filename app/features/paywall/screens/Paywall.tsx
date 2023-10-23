import React, { useState } from 'react'
import { Background, Box, Button, Icon, Typo } from 'components'
import { images } from 'assets'
import { styles } from './paywall.styles'
import { colors, sizes } from 'theme'
import { FeaturesCard, PremiumOptionsCard } from '../components'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import { ICardConfigure } from './paywall.types'
import { RootNavigationProp } from 'navigation/navigation.types'
import { screens, stacks } from 'navigation/screenLinking/screenLinking'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { STORAGE_KEYS } from 'constants/storageKeys'
import { useAppDispatch, useAppSelector } from 'services/redux/hooks'
import {
  selectHideOnboarding,
  setHideOnboarding,
} from 'services/redux/slices/hideOnboarding/hideOnboardingSlice'

const Paywall = ({ navigation }: { navigation: RootNavigationProp }) => {
  const dispatch = useAppDispatch()
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

  const isAppTourCompleted = useAppSelector(selectHideOnboarding)
  const handleClose = async () => {
    if (!isAppTourCompleted) {
      await AsyncStorage.setItem(STORAGE_KEYS.APP_TOUR_COMPLETED, '1')
      return dispatch(setHideOnboarding())
    }

    navigation.navigate(stacks.homeStack.name, {
      screen: screens.home.home.name,
    })
  }

  return (
    <Box flex={1}>
      <StatusBar barStyle="light-content" />
      <Background source={images.paywall_asset_1}>
        <TouchableOpacity style={styles.close} onPress={handleClose}>
          <Box style={styles.closeWrapper} />
          <Icon name={'close'} size={8} />
        </TouchableOpacity>
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
          onPress={handleClose}
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
