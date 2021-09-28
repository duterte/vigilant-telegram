import { useContext } from 'react';
import { Context } from '../context/GlobalState';

export const sign = (amount: number) => (amount > 0 ? '+' : '-');
export const dynamicClass = (amount: number) => (amount > 0 ? 'plus' : 'minus');

const TransactionList: React.FC = () => {
  const { transactions, deleteTransaction } = useContext(Context);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li key={transaction.id} className={dynamicClass(transaction.amount)}>
            {transaction.text}{' '}
            <span>
              {sign(transaction.amount)}$
              {Math.abs(transaction.amount).toFixed(2)}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
