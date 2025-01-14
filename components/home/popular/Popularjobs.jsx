import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import { PopularjobsCard } from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Jobs</Text>
      </View>
    </View>
  )
}

export default Popularjobs