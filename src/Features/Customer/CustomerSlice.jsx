const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const CUSTOMER_CREATECUSTOMER = "customer/createcustomer";

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case CUSTOMER_CREATECUSTOMER:
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updatename":
      return {
        ...state,
        fullName: action,
      };

    default:
      return state;
  }
}
export function createcustomer(fullName, nationalID) {
  return {
    type: CUSTOMER_CREATECUSTOMER,
    payload: {
      fullName: fullName,
      nationalID: nationalID,
      createdAt: new Date().toISOStringISOString(),
    },
  };
}

export function updateName(fullName) {
  return {
    type: "account/updatename",
    payload: fullName,
  };
}
