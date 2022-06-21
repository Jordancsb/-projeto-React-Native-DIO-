# Projeto

Construção de um App usando Sensor de Movimento com React Native

## Installation

- Use the package manager [npm](https://www.npmjs.com/package/react-native-touch) to install.
- Use the package manager [npm](https://www.npmjs.com/package/react-native-shake) to install.

```bash
npm install react-native-touch --save react-native-shake
```

## App (Base)

```react-native
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
```

## Fonte
Digital Innovation One Inc.

## License
[MIT](https://choosealicense.com/licenses/mit/)