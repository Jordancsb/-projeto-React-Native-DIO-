import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-web";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnPress = () => setToggle((oldToggle) => !oldToggle);
    return (
        <View style={toggle ? style.clight : style.container}>
          <TouchableOpacity onPress={handleOnPress}/>
        </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clight: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
