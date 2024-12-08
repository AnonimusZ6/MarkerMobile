import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import axios from "axios";

export default function AllMaterials() {
    const [allData, setAllData] = useState<string[]>([]);

    useEffect(() => {
        axios.get("http://79.136.214.49:808/api/GetItems", {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.data).then((result) => setAllData(result));

    }, [allData]);


    const resultData = allData.map((res, index) => {

        return (<>
        <View style={styles.viewContainer}>
            <Text style={styles.text}>{res.steelGrade}</Text>
            <Pressable style={styles.button}>
                <Text style={styles.textButton}>Подробнее</Text>
            </Pressable>
        </View>
        </>);
        
    });

    return (<>
    <View style={styles.container}>
        <View>
            <Pressable style={styles.addButton}>
                <Text style={styles.textAddButtons}>Добавить деталь</Text>
            </Pressable> 
        </View>
    <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["top"]}>
            <ScrollView>
                {resultData}
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
    </View>
    </>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    viewContainer: {
        backgroundColor: "white",
        flex: 1,
        width: "500px",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
        borderRadius: "10px",
        padding: "20px"
    },
    text: {
        color: "#242238",
        fontSize: 25
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#242238',
    },
    textButton: {
        color: "white",
        fontSize: 15
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