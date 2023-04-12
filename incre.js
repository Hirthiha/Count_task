import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./style";

function Incre() {
  const initial = 0;
  const [increase, setIncrease] = useState(initial);
  const increment = () => {
    setIncrease(increase + 1);
  };
  const drecrement = () => {
    setIncrease(increase > 0 ? increase - 1 : 0);
  };
  const reset = () => {
    setIncrease(initial);
  };

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.text}>{increase}</Text>
        <Pressable onPress={increment}>
          <Text style={styles.press}>Increment</Text>
        </Pressable>

        <Pressable onPress={drecrement}>
          <Text style={styles.press}>Decrement</Text>
        </Pressable>
      </View>
      <View style={{ marginLeft: 50 }}>
        <Pressable onPress={reset}>
          <Text style={styles.reset}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Incre;
