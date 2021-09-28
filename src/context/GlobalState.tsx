import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

export enum TransactionType {
  DELETE_TRANSACTION = 'DELETE_TRANSACTION',
  ADD_TRANSACTION = 'ADD_TRANSACTION',
}

export interface AddTransaction {
  type: TransactionType.ADD_TRANSACTION;
  payload: Transaction;
}

export interface DeleteTransaction {
  type: TransactionType.DELETE_TRANSACTION;
  payload: number;
}

export type ActionType = AddTransaction | DeleteTransaction;

export interface Transaction {
  id: number;
  text: string;
  amount: number;
}

export interface State {
  transactions: Transaction[];
  deleteTransaction: (a: number) => void | undefined;
  addTransaction: (a: Transaction) => void | undefined;
}

export const initialState: State = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
  deleteTransaction: (a: number) => {},
  addTransaction: (a: Transaction) => {},
};

export const Context = createContext(initialState);

const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id: number) => {
    dispatch({ type: TransactionType.DELETE_TRANSACTION, payload: id });
  };

  const addTransaction = (transaction: Transaction) => {
    dispatch({ type: TransactionType.ADD_TRANSACTION, payload: transaction });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
