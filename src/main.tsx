import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <p>สวัสดีครับ ผมกำลังเรียน React และ TypeScript</p>

      <h2>สิ่งที่ผมชอบ</h2>
      <ul>
        <li>เขียนโปรแกรม</li>
        <li>ฟังเพลง</li>
        <li>เล่นเกม</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");

if(rootElement)
{
    createRoot(rootElement).render(<App />);
}