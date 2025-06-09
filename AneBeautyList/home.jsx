export default function Home({ onStart }) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
        <div className="bg-pink-100 rounded-2xl shadow-xl w-full max-w-md p-8 text-center">
          <h1 className="text-4xl font-bold text-pink-700 mb-4">Beauty List 💄</h1>
          <p className="text-pink-600 mb-6">
            Sua lista de compras com tudo que você precisa para realçar sua beleza.
          </p>
          <button
            onClick={onStart}
            className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-pink-600 transition"
          >
            Começar
          </button>
        </div>
      </div>
    );
  }
  