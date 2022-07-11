import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  FlatList,
  Button
}
  from "react-native";
import GoalItem from "./components/GoalItem";
  import GoalInput from "./components/GoalInput";

export default function App() {
 
  const [goals, setGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const addGoalHandler = (goalTitle) => {
   
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }
    ]);
    setAddMode(false);
  };

 

  const removeGoalHandler = (goalId) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId );
    });
  }

  const cancel = () => {
    setAddMode(false);
  }
  

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={ ()=> setAddMode(true)} />
      <GoalInput visible={addMode} onAddGoal={addGoalHandler} onCancel={cancel } />
     
     
      <FlatList
        keyExtractor = {(item, index) =>item.id }
        data={goals}
        renderItem={itemData =>
          
          <GoalItem id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        }  
      />
      </View>
      

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

  

 
});
