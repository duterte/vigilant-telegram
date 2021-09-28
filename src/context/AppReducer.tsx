import { ActionType, State, TransactionType } from './GlobalState';

const AppReducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case TransactionType.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          ({ id }) => id !== Number(action.payload)
        ),
      };

    case TransactionType.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default AppReducer;
