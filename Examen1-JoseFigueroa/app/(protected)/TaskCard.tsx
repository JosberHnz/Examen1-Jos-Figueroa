import { FlatList, TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const inventario = [
    { id: "1", titulo: "Tarea #1", descripcion: "Importancia de la IA" },
  ];

  export default function InventarioScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons name="cube-outline" size={32} color="#2D2E32" />
            <Text style={styles.title}>Diario de Tareas</Text>
          </View>
    
          <FlatList
            data={inventario}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                
            <><View style={styles.itemHeader}>
                    <Ionicons name="pricetag-outline" size={24} color="#4A90E2" />
                    <Text style={styles.item}>{item.titulo}</Text>
                </View><View style={styles.itemHeader}>
                        <Ionicons name="albums-outline" size={20} color="#666" />
                        <Text style={styles.item}>{item.descripcion}</Text>
                    </View></>

            )}
          />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#F5F7FA",

      },
      header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
      },
      title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2D2E32",
        marginLeft: 10,
      },
      item: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 15,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        justifyContent: "center",
      },
      itemHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
      },
      itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 8,
      },
      infoRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
      },
      itemCategory: {
        fontSize: 14,
        color: "#666",
        marginLeft: 8,
      },
      itemQuantity: {
        fontSize: 14,
        color: "#444",
        fontWeight: "bold",
        marginLeft: 8,
      },
    });