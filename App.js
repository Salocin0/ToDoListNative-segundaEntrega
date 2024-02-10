import { View } from 'react-native';
import TaskConteiner from './src/Components/TaskConteiner';
import { useFonts } from "expo-font";
import { fontCollection } from "./src/Styles/Fonts";

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection);
  if (!fontsLoaded) return null;
  return (
    <View>
      <TaskConteiner/>
    </View>
  );
}
