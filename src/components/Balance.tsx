import { useContext } from 'react';
import { Context, Transaction } from '../context/GlobalState';
import { dynamicClass, sign } from './TransactionList';

export const total = (transactions: Transaction[]): number =>
  transactions
    .map(({ amount }) => amount)
    .reduce((acc, item) => (acc += item), 0);

const Balance: React.FC = () => {
  const { transactions } = useContext(Context);

  return (
    <div className={dynamicClass(total(transactions))}>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {sign(total(transactions))}${total(transactions)}
      </h1>
    </div>
  );
};

export default Balance;
