import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from "react-native";

export default function App() {
  const [showHome, setShowHome] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: "Batom Vermelho" },
    { id: 2, name: "Base Líquida" },
    { id: 3, name: "Máscara de Cílios" },
  ]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (!newItem.trim()) return;
    setItems([...items, { id: Date.now(), name: newItem }]);
    setNewItem("");
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  if (!showHome) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.startScreen}>
          <Text style={styles.title}>Ane Beauty List 💄</Text>
          <Text style={styles.subtitle}>Sua rotina de beleza começa aqui ✨</Text>
          <TouchableOpacity onPress={() => setShowHome(true)} style={styles.startButton}>
            <Text style={styles.startButtonText}>Acessar Lista</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeScreen}>
        <Text style={styles.title}>Ane Beauty List 💄</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Adicionar produto..."
            style={styles.input}
            value={newItem}
            onChangeText={setNewItem}
          />
          <TouchableOpacity onPress={handleAddItem} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={styles.listContent}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
              <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.removeButton}>✕</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe4e6",
  },
  startScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 100, // <-- aqui abaixei mais o conteúdo
  },
  homeScreen: {
    flex: 1,
    paddingTop: 80, // <-- espaço no topo da tela principal também
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 36,
    color: "#be185d",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#9d174d",
    textAlign: "center",
    marginBottom: 30,
  },
  startButton: {
    backgroundColor: "#f9a8d4",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  startButtonText: {
    color: "#9d174d",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f9a8d4",
  },
  addButton: {
    backgroundColor: "#db2777",
    paddingHorizontal: 16,
    justifyContent: "center",
    marginLeft: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  itemText: {
    color: "#9d174d",
    fontSize: 16,
  },
  removeButton: {
    color: "#f43f5e",
    fontSize: 20,
  },
});
