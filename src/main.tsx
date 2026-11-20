import { createRoot } from "react-dom/client";
import { useState } from 'react';
import { Summary } from "./Summary";
import type{ Transaction } from "./Summary";

function App() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
  return (
    <div id="app">
      <header id="header">
        <h1 id="title">บันทึกรายรับ–รายจ่าย</h1>
        <p>ติดตามการเงินของคุณได้ในที่เดียว</p>
        <Summary transactions={transactions} />
      </header>

      <main id="main">

        <section id="add-transaction">
          <h2>เพิ่มรายการ</h2>
          
          <form id="list">
            <label>
              ชื่อรายการ
              <input id="transaction-name" type="text" name="ListName" />
            </label>
            <label>
              จำนวนเงิน
              <input id="transaction-amount" type="text" name="ListName" />
            </label>
            <label>
              ประเภท
              <select id="transaction-type">
                <option value="expense">รายจ่าย</option>
                <option value="income">รายรับ</option>
              </select>
            </label>
            <label>
              วันที่
              <input id="transaction-date" type="date" />
            </label>
            <button id="save-transaction" type="submit">บันทึกรายการ</button>
          </form>
        </section>

        <section id="transactions">
          <h2>รายการทั้งหมด</h2>
        </section>
      </main>
    </div>
  );
}
export { App };

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
}

