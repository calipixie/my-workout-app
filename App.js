import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Container from "./client/Container";
import NewRoutine from "./client/NewRoutine";
import AddWorkout from "./client/AddWorkout";
import WorkoutHistory from "./client/WorkoutHistory";

const navigator = createStackNavigator(
  {
    Home: Container, 
    NewRoutine: NewRoutine,
    AddWorkout: AddWorkout,
    WorkoutHistory: WorkoutHistory,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Track Hiit"
    }
  }
);

export default createAppContainer(navigator);
