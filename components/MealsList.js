import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";


const MealsList = ({items}) => {
    const renderMealItem = (itemData) => {
        const { item } = itemData;
        const mealsItemProps = {
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration: item.complexity,
        };
        return <MealItem {...mealsItemProps} />;
      };
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
}

export default MealsList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });