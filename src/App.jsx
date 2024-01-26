import { useState } from "react";
import "./App.css";
import Review from "./Review";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Review />
    </main>
  );
}

export default App;
