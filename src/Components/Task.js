import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../Styles/Colors";
import fonts from '../Styles/Fonts'

const Task = ({ task, handleChangeCompleted, handledeletetask,handleupdatetask }) => {
  const handleCompleted = () => {
    handleChangeCompleted(task.id);
  };

  const handleDelete = () => {
    handledeletetask(task.id);
  };

  const handleUpdate = () => {
    handleupdatetask(task.id);
  }

  const getStatusText = () => {
    switch (true) {
      case task.completado:
        return "Completado";
      case task.fecha_vencimiento &&
        new Date(task.fecha_vencimiento) < new Date():
        return "Vencido";
      default:
        return "Pendiente";
    }
  };

  const getItemStyle = () => {
    switch (true) {
      case task.completado:
        return styles.labelCompletado;
      case task.fecha_vencimiento &&
        new Date(task.fecha_vencimiento) < new Date():
        return styles.labelVencido;
      default:
        return styles.labelPendiente;
    }
  };

  return (
    <View style={[styles.item]}>
      <Text style={styles.titulo}>{task.titulo}</Text>
      <View style={{width:"100%"}}>
        <Text style={styles.fecha}>
          Creacion {new Date(task.fecha_creacion).toLocaleDateString("es-ES")}
        </Text>
        {task.fecha_vencimiento && (
          <Text style={styles.fecha}>
            Vencimiento{" "}
            {new Date(task.fecha_vencimiento).toLocaleDateString("es-ES")}
          </Text>
        )}
        {task.fecha_actualizacion && (
          <Text style={styles.fecha}>
            Actualizacion{" "}
            {new Date(task.fecha_actualizacion).toLocaleDateString("es-ES")}
          </Text>
        )}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={getItemStyle()}>{getStatusText()}</Text>
        <Switch value={task.completado} onValueChange={handleCompleted} />
      </View>
      <TouchableOpacity onPress={handleDelete} style={styles.button}>
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={handleUpdate} style={styles.btnEditar}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.Blanco,
    borderColor: Colors.Gris,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    elevation: 5,
    borderRadius: 5,
    position: "relative",
    height: "auto",
    fontFamily:fonts.Spartan
  },
  labelPendiente: {
    backgroundColor: Colors.Celeste,
    color: Colors.Blanco,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    fontFamily:fonts.Spartan
  },
  labelVencido: {
    backgroundColor: Colors.Naranja,
    color: Colors.GrisClaro,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    fontFamily:fonts.Spartan
  },
  labelCompletado: {
    backgroundColor: Colors.Verde,
    color: Colors.Blanco,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    fontFamily:fonts.Spartan
  },
  titulo: {
    alignSelf: "center",
    fontSize: 20,
    color: Colors.Negro,
    fontFamily:fonts.Spartan
  },
  fecha: {
    color: Colors.Gris,
    fontFamily:fonts.Spartan
  },
  button: {
    borderRadius: 5,
    color: Colors.Blanco,
    backgroundColor: Colors.Rojo,
    paddingVertical: 5,
    alignItems: "center",
    position: "absolute",
    right: 0,
    width: 30,
    margin: 5,
    fontFamily:fonts.Spartan
  },
  buttonText: {
    color: Colors.Blanco,
    fontFamily:fonts.Spartan
  },
  btnEditar: {
    backgroundColor: Colors.Info,
    color: Colors.Blanco,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    fontFamily:fonts.Spartan
    },
});
