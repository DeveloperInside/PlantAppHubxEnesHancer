import { View, Text } from 'react-native'
import React from 'react'
import { Background, Icon, Typo } from 'components'
import { images } from 'assets'
import { styles } from './paywall.styles'
import { colors } from 'theme'
import { FeaturesCard } from '../components'

const Paywall = () => {
  return (
    <View style={{ flex: 1 }}>
      <Background source={images.paywall_asset_1}>
        <View style={styles.close}>
          <View style={styles.closeWrapper} />
          <Icon name={'close'} size={8} />
        </View>
        <Text>Paywall</Text>
        <View style={styles.upperContainer}>
          <Typo variant={'header_large'} color={colors.white}>
            PlantApp{' '}
            <Typo variant="header_light" color={colors.white}>
              Premium
            </Typo>
          </Typo>
          <Typo variant='subheader' color={colors.white} style={styles.subheader}>Access All Features</Typo>
        </View>
        <View>
          <FeaturesCard />
        </View>
      </Background>
    </View>
  )
}

export default Paywall
