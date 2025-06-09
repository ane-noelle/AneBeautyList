import { useState } from "react";
import Home from "./home";
import Lista from "./lista";

export default function App() {
  const [showList, setShowList] = useState(false);

  return showList ? (
    <Lista />
  ) : (
    <Home onStart={() => setShowList(true)} />
  );
}
