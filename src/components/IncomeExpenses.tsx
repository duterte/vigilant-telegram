import { useContext } from 'react';
import { Context } from '../context/GlobalState';
import { total } from './Balance';

const IncomeExpenses: React.FC = () => {
  const { transactions } = useContext(Context);

  const income = transactions.filter(({ amount }) => amount > -1);
  const expense = transactions.filter(({ amount }) => amount <= -1);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${total(income).toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(total(expense)).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
