import React, { useState, useContext } from 'react';
import { Context } from '../context/GlobalState';

const AddTransaction: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const { transactions, addTransaction } = useContext(Context);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text || !amount) return;
    const newTransaction = {
      id: (function (arr) {
        try {
          return [...arr].sort((a, b) => b.id - a.id)[0].id + 1;
        } catch (error) {
          return 0;
        }
      })(transactions),
      text,
      amount: Number(amount),
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expenses - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.currentTarget.value))}
            inputMode="numeric"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
