// App.jsx
import { useState } from "react";

const initialItems = [
  { id: 1, name: "Batom Vermelho", quantity: 1 },
  { id: 2, name: "Base Líquida", quantity: 1 },
  { id: 3, name: "Máscara de Cílios", quantity: 2 },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  function handleAddItem(e) {
    e.preventDefault();
    if (!newItem) return;

    const newItemObj = {
      id: Date.now(),
      name: newItem,
      quantity: 1,
    };
    setItems([...items, newItemObj]);
    setNewItem("");
  }

  function handleRemoveItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="bg-pink-100 rounded-2xl shadow-xl w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          Beauty List 💄
        </h1>

        <form onSubmit={handleAddItem} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Adicionar produto..."
            className="flex-1 p-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            +
          </button>
        </form>

        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm"
            >
              <span className="text-pink-700">{item.name}</span>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-pink-400 hover:text-pink-600 text-lg"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
