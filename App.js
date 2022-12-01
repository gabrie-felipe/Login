import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-native-paper";
import { RootNavigation } from "./src/navigation";

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
    </Provider>
  );
}
