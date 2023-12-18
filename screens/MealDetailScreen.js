import { Image, Text, View, StyleSheet,ScrollView, Button } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetailsComp from "../components/MealDetailsComp";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route,navigation }) => {
  const { title, mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const headerButtonPressHandler =()=>{
    console.log("pressed");
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: ()=>{
            return <IconButton icon="star" color="white" pressHandler={headerButtonPressHandler} />
        }
    })
  },[headerButtonPressHandler,navigation])
  return (
    <ScrollView style={styles.rootContainer} >
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetailsComp
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List listArray={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List listArray={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer:{
    alignItems:"center"
  },
  listContainer: {
    width: "80%",
  },
});
