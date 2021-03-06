import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import AdvanceColorScreen from './src/screens/AdvanceColorScreen';
import TextScreen from './src/screens/TextScreen';
import BoxModel from './src/screens/BoxModel';
import LayoutScreen from './src/screens/LayoutScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    AdvanceColor: AdvanceColorScreen,
    TextInput: TextScreen,
    BoxModel: BoxModel,
    LayOut: LayoutScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home"
    }
  }
);

export default createAppContainer(navigator);
