import { createRoot } from "react-dom/client";
import { useState } from 'react';
import { Summary } from "./Summary";
import type { Transaction } from "./Summary";
import type { SubmitEvent } from "react";


function App() {

  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);


  function handleAdd(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name"));
    const amount = Number(formData.get("ListMoney"));
    const type = formData.get("type");
    const date = String(formData.get("date"));

    if (!name || !date || amount <= 0) {
      return;
    }

    if (type !== "income" && type !== "expense") {
      return;
    }

    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      name: name,
      amount: amount,
      type: type,
      date: date
    };

    setTransactions((previous) => [...previous, newTransaction]);
  }


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

          <form id="list" onSubmit={handleAdd}>
            <label>
              ชื่อรายการ
              <input id="transaction-name" type="text" name="name" />
            </label>
            <label>
              จำนวนเงิน
              <input id="transaction-amount" type="text" name="ListMoney" />
            </label>
            <label>
              ประเภท
              <select id="transaction-type" name="type">
                <option value="expense">รายจ่าย</option>
                <option value="income">รายรับ</option>
              </select>
            </label>
            <label>
              วันที่
              <input id="transaction-date" type="date" name="date" />
            </label>
            <button id="save-transaction" type="submit">บันทึกรายการ</button>
          </form>
        </section>

        <section>
          <h2>รายการทั้งหมด</h2>

          {
            transactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <p>ชื่อรายการ: {transaction.name}</p>
                <p>จำนวนเงิน: {transaction.amount} บาท</p>
                <p>ประเภท: {transaction.type}</p>
                <p>วันที่: {transaction.date}</p>
              </div>
            ))
          }
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

