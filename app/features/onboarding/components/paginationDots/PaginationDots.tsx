import { View } from 'react-native'
import React from 'react'
import { IPaginationDotsProps } from './paginationDots.types'
import { styles } from './paginationDots.styles'

const PaginationDots = ({
  total = 3,
  current = 1,
  ...rest
}: IPaginationDotsProps) => {
  return (
    <View style={styles.wrapper} {...rest}>
      <View style={styles.container}>
        {Array(total)
          .fill('')
          .map((_, i) => {
            return (
              <View
                key={i}
                style={[styles.dot, current - 1 == i && styles.dotSelected]}
              />
            )
          })}
      </View>
    </View>
  )
}

export default PaginationDots
