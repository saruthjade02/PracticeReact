export type Transaction = {
    id: string;
    name: string;
    date: string;
    amount: number;
    type: "income" | "expense";
};

type TotalAmount = {
    income: number;
    expense: number;
    balance: number;
};

function Summary({ transactions }: { transactions: Transaction[] }) {
    let income = 0;
    let expense = 0;
    for (const item of transactions) {
        if (item.type === "income") {
            income = income + item.amount;
        } else if (item.type === "expense") {
            expense = expense + item.amount;
        }
    }
    const total: TotalAmount = {
        income: income,
        expense: expense,
        balance: income - expense,
    };

    return (
        <section id="summary">
            <h2>สรุปยอด</h2>
            <p>รายรับ: {total.income} บาท</p>
            <p>รายจ่าย: {total.expense} บาท</p>
            <p>คงเหลือ: {total.balance} บาท</p>
        </section>
    );
}

export { Summary };
