import { createRoot } from "react-dom/client";

function App() {
  return <p>ข้อความนี้แสดงด้วย React</p>;
}

const rootElement = document.getElementById("root");

if(rootElement)
{
    createRoot(rootElement).render(<App />);
}