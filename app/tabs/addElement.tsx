import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Pressable} from "react-native";

export default function AddElement() {
    const [plavkNumber, setPlavkNumber] = useState<string>("");
    const [steelMark, setSteelMark] = useState<string>("");
    const [crossSection, setCrossSection] = useState<string>("");
    const [width, setWidth] = useState<string>("");


  return (
    <View style={styles.container}>
        <Text style={styles.mainTitle}>Добавить деталь</Text>

        <View style={styles.formContainer}>
          <Text style={styles.text}>Введите номер плавки:</Text>
        <TextInput
          style={styles.input}
          onChange={(e) => setPlavkNumber(e.target.value)}
          placeholder="Номер плавки"
        />

        <Text style={styles.text}>Введите марку стали:</Text>
        <TextInput style={styles.input} onChange={(e) => setSteelMark(e.target.value)} placeholder="Марка стали" />

        <Text style={styles.text}>Введите поперечное сечение:</Text>
        <TextInput style={styles.input} onChange={(e) => setCrossSection(e.target.value)} placeholder="Поперечное сечение" />

        <Text style={styles.text}>Введите длину:</Text>
        <TextInput style={styles.input} onChange={(e) => setWidth(e.target.value)} placeholder="Длина" />

        <Pressable style={styles.addButton}>
                <Text style={styles.textAddButtons}>Добавить деталь</Text>
            </Pressable> 
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center"
  },
  formContainer: {
    width: 500,
    height: "auto",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  text: {
    color: "black",
    fontSize: 20
  },
  mainTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white"
  },
  input: {
    width: 400,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  addButton: {
    backgroundColor: "#ffd33d",
    width: "200px",
    height: "45px",
    padding: "20px",
    margin: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px"
},
textAddButtons: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#25292e"
}
});