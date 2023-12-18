import { Text, View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route,navigation }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(categoryId);
  });

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category)=>category.id === categoryId).title
    navigation.setOptions({
      title:categoryTitle
    })

  },[categoryId,navigation])

  const renderMealItem = (itemData) => {
    const {item} = itemData
    const mealsItemProps = {
        title: item.title,
        imageUrl: item.imageUrl,
        affordability:item.affordability,
        complexity:item.complexity,
        duration:item.complexity
    }
    return (
      <MealItem {...mealsItemProps}  />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
