import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export function ThemedText({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title={"Inventario"}
          onPress={() => navigation.navigate("Inventario")}
          color="#ff0000"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Perdido en mi"}
          onPress={() => {}}
          color="#ff0000"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"704"}
          onPress={() => {}}
          color="#ff0000"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Mi alma"}
          onPress={() => {}}
          color="#ff0000"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Formulario"}
          onPress={() => navigation.navigate("Formulario")}
          color="#ff0000"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Informacion"}
          onPress={() => navigation.navigate("Informacion")}
          color="#ff0000"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Login"}
          onPress={() => navigation.navigate("Login")}
          color="#ff0000"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Register"}
          onPress={() => navigation.navigate("Register")}
          color="#ff0000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black"
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden'
  },
});
