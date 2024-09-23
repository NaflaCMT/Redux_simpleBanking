const initialStateAcount = {
  balance: 0,
  loan: 0,
  loanPurpose: " ",
};
export default function accountReducer(state = initialStateAcount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestloan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payloan":
      return {
        ...state,
        loan: 0,
        loanPurpose: " ",
        balance: state.balance - loan,
      };
    default:
      return state;
  }
}
export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestloan(amount, purpose) {
  return {
    type: "account/requestloan",
    payload: { amount: amount, purpose: purpose },
  };
}
export function payLoan() {
  return {
    type: "acount/payloan",
  };
}
