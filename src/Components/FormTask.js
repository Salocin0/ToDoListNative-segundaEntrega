import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Colors } from "../Styles/Colors";
import fonts from "../Styles/Fonts";

const FormTask = ({ handleTaskCreation }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      setSelectedDate(selectedDate);
    }
  };

  const handleCreateTask = () => {
    if (taskTitle !== "") {
      handleTaskCreation(taskTitle, selectedDate);
      setSelectedDate(null);
      setTaskTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TODO List</Text>
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        placeholderTextColor="black"
        value={taskTitle}
        onChangeText={(text) => setTaskTitle(text)}
      />
      <TouchableWithoutFeedback onPress={toggleDatePicker}>
        <View style={styles.input}>
          <TextInput
            style={{ color: "black", fontFamily:fonts.Spartan }}
            editable={false}
            value={
              selectedDate
                ? selectedDate.toLocaleDateString("es-ES")
                : "Fecha de vencimiento"
            }
          />
        </View>
      </TouchableWithoutFeedback>
      {showDatePicker && (
        <RNDateTimePicker
          value={selectedDate || new Date()}
          onChange={handleDateChange}
          mode="date"
          minimumDate={new Date()}
        />
      )}
      <TouchableOpacity onPress={handleCreateTask} style={styles.button}>
        <Text style={styles.buttonText}>Crear Tarea</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.Azul,
    marginTop: 25,
    width: "100%",
    elevation: 10,
    borderColor: Colors.Negro,
    borderBottomWidth: 1,
    fontFamily:fonts.Spartan
  },
  inputContainer: {
    width: "80%",
    marginVertical: 10,
    fontFamily:fonts.Spartan
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: Colors.Gris,
    color: Colors.Negro,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: Colors.Blanco,
    marginVertical: 3,
    fontFamily:fonts.Spartan
  },
  buttonContainer: {
    width: "80%",
    fontFamily:fonts.Spartan
  },
  button: {
    borderRadius: 5,
    backgroundColor: Colors.Celeste,
    padding: 10,
    alignItems: "center",
    marginVertical: 3,
    borderColor: Colors.Blanco,
    borderWidth: 1,
    width: "60%",
    fontFamily:fonts.Spartan
  },
  buttonText: {
    color: "white",
    fontFamily:fonts.Spartan
  },
  titulo: {
    fontSize: 20,
    color: "white",
    fontFamily:fonts.Spartan
  },
});

export default FormTask;
