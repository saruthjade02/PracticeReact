import { createRoot } from "react-dom/client";
import { useState } from 'react';

function Score({ name }: { name: string }) {
  const [score, Countscore] = useState(100);

  function IncreaseScore(amount: number){
    Countscore(score + amount);
  }
  return (
    <div>
      <h2>{name}</h2>
      <p>คะแนน: {score} </p>
      <button onClick={() => IncreaseScore(5)}>
        เพิ่มคะแนน
      </button>
    </div>
  )
}

function App() {

  return (
    <div>
      <Score name="สมชาย" />
      <Score name="สมหญิง" />
    </div>
  );
}
export { App };

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
}