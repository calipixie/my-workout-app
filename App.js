import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Container from "./client/Container";
import NewRoutine from "./client/NewRoutine";
import AddWorkout from "./client/AddWorkout";

const navigator = createStackNavigator(
  {
    Home: Container, 
    NewRoutine: NewRoutine,
    AddWorkout: AddWorkout,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
