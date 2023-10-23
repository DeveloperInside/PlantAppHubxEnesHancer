import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native'
import React, { useEffect } from 'react'
import { Box, Loading, Typo } from 'components'
import { images } from 'assets'
import { appStyles, sizes } from 'theme'
import {
  CategoryCard,
  PremiumCard,
  QuestionCard,
  SearchBar,
} from '../components'
import { styles } from './home.styles'
import { useCategoriesQuery } from '../api/categories'
import { useQuestionsQuery } from '../api/questions'
import { HomeNavigationProp } from 'navigation/navigation.types'
import { screens } from 'navigation/screenLinking/screenLinking'

const Home = ({ navigation }: HomeNavigationProp) => {
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategoriesQuery()

  const {
    data: questions,
    isLoading: isQuestionsLoading,
    isError: isQuestionsError,
  } = useQuestionsQuery()

  const handleNavigatePayWall = () => {
    navigation.navigate(screens.home.paywall.name)
  }

  useEffect(() => {
    if (isQuestionsError || isCategoriesError) {
      Alert.alert('Internet Error', 'Please, check your internet connection!')
    }
  }, [isQuestionsError, isCategoriesError])

  return (
    <SafeAreaView style={appStyles.container}>
      <StatusBar barStyle="dark-content" />
      <Box flex={1}>
        <Box style={styles.headerContainer}>
          <Box style={styles.headerLeafContainer}>
            <Image
              source={images.home_header_leaf_left}
              style={styles.headerLeaf}
              resizeMode="contain"
            />
            <Image
              source={images.home_header_leaf_right}
              style={styles.headerLeaf}
              resizeMode="contain"
            />
          </Box>
          <Box space={sizes.medium} style={styles.headerContent}>
            <Box space={sizes.slim}>
              <Typo>Hi, plant lover!</Typo>
              <Typo variant="home_welcome">Good Afternoon! ⛅</Typo>
            </Box>
            <SearchBar />
          </Box>
        </Box>
        <ScrollView style={styles.body}>
          <Box p={sizes.huge}>
            <PremiumCard onPress={handleNavigatePayWall} />
          </Box>
          <Box space={sizes.medium} style={styles.questionContainer}>
            <Typo variant="question_title">Get Started</Typo>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Box row space={sizes.xsmall}>
                {questions?.data.map(question => (
                  <QuestionCard
                    key={question.id}
                    title={question.title}
                    subtitle={question.subtitle}
                    image_uri={question.image_uri}
                    uri={question.uri}
                  />
                ))}
              </Box>
            </ScrollView>
          </Box>
          <Box p={sizes.huge}>
            <FlatList
              scrollEnabled={false}
              data={categories?.data}
              numColumns={2}
              columnWrapperStyle={styles.categoriesColumn}
              contentContainerStyle={styles.categoriesContainer}
              renderItem={({ item }) => (
                <CategoryCard
                  key={item.id}
                  title={item.title}
                  image={item.image.url}
                />
              )}
            />
          </Box>
        </ScrollView>
      </Box>
      {(isQuestionsLoading || isCategoriesLoading) && <Loading />}
    </SafeAreaView>
  )
}

export default Home
