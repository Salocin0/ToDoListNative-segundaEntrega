import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../Styles/Colors";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import fonts from "../Styles/Fonts";

const FormUpdateTask = ({
  task,
  handleCancelUpdate,
  handleSaveUpdatedTask,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState(task.titulo);
  const [newTaskSelectedDate, setNewTaskSelectedDate] = useState(
    new Date(task.fecha_vencimiento)
  );

  const toggleDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      setNewTaskSelectedDate(selectedDate);
    }
  };

  const handleSaveUpdated = () => {
    const newTask = {
      completado: task.completado,
      fecha_vencimiento: newTaskSelectedDate,
      titulo: newTaskTitle,
      id: task.id,
      fecha_actualizacion: new Date(),
      fecha_creacion: task.fecha_creacion,
    };
    handleSaveUpdatedTask(newTask);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Actualizar Tarea</Text>
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        placeholderTextColor="black"
        value={newTaskTitle}
        onChangeText={(text) => setNewTaskTitle(text)}
      />
      <TouchableWithoutFeedback onPress={toggleDatePicker}>
        <View style={styles.input}>
          <TextInput
            style={{ color: "black", fontFamily: fonts.Spartan }}
            editable={false}
            value={
              newTaskSelectedDate
                ? newTaskSelectedDate.toLocaleDateString("es-ES")
                : "Fecha de vencimiento"
            }
          />
        </View>
      </TouchableWithoutFeedback>
      {showDatePicker && (
        <RNDateTimePicker
          value={newTaskSelectedDate || new Date()}
          onChange={handleDateChange}
          mode="date"
          minimumDate={new Date()}
        />
      )}
      <TouchableOpacity onPress={handleSaveUpdated} style={styles.button}>
        <Text style={styles.buttonText}>Actualizar Tarea</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancelUpdate} style={styles.button}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormUpdateTask;

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
    fontFamily: fonts.Spartan,
  },
  inputContainer: {
    width: "80%",
    marginVertical: 10,
    fontFamily: fonts.Spartan,
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
    fontFamily: fonts.Spartan,
  },
  buttonContainer: {
    width: "80%",
    fontFamily: fonts.Spartan,
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
    fontFamily: fonts.Spartan,
  },
  buttonText: {
    color: "white",
    fontFamily: fonts.Spartan,
  },
  titulo: {
    fontSize: 20,
    color: "white",
    fontFamily: fonts.Spartan,
  },
});
